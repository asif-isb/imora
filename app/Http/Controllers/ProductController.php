<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\JpegEncoder;
use Intervention\Image\Encoders\PngEncoder;

use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(Product::with(['category', 'tags', 'ratings'])->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'discount' => 'nullable|numeric',
            'image' => 'required|image|max:2048',
            'rating' => 'nullable|numeric',
            'is_best_seller' => 'boolean',
            'is_popular' => 'boolean',
            'tags' => 'array',
            'tags.*' => 'exists:tags,id',
        ]);

        // Generate slug
        $data['slug'] = Str::slug($data['name']);

        // Handle image upload
        if ($request->hasFile('image')) {
            $manager = new ImageManager(new Driver());
            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $filename = uniqid() . '.' . $extension;

            $encoder = $extension === 'png'
                ? new PngEncoder(90)
                : new JpegEncoder(90);

            // No resizing — just read and encode
            $encodedImage = $manager->read($image)->encode($encoder);

            // Save to products disk (no "products/" prefix in filename unless you want subfolders)
            Storage::disk('products')->put($filename, $encodedImage->toString());

            $data['image'] = $filename;
        }


        $product = Product::create($data);

        if (isset($data['tags'])) {
            $product->tags()->sync($data['tags']);
        }

        return response()->json($product->load(['category', 'tags']));
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'price' => 'required|numeric',
            'discount' => 'nullable|numeric',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'rating' => 'nullable|numeric',
            'is_best_seller' => 'boolean',
            'is_popular' => 'boolean',
            'tags' => 'array',
            'tags.*' => 'exists:tags,id',
        ]);

        // Update slug if name changed
        if ($product->name !== $data['name']) {
            $data['slug'] = Str::slug($data['name']);
        }

        // Handle new image
        if ($request->hasFile('image')) {
            // Delete old image from products disk
            if ($product->image && Storage::disk('products')->exists($product->getRawOriginal('image'))) {
                Storage::disk('products')->delete($product->getRawOriginal('image'));
            }

            // Encode and store new image
            $manager = new ImageManager(new Driver());
            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $filename = uniqid() . '.' . $extension;

            $encoder = $extension === 'png'
                ? new PngEncoder(90)
                : new JpegEncoder(90);

            $encodedImage = $manager->read($image)->encode($encoder);

            Storage::disk('products')->put($filename, $encodedImage->toString());

            $data['image'] = $filename;
        } else {
            unset($data['image']); // retain existing image if not uploading new one
        }

        $product->update($data);

        // Sync tags if provided
        if (isset($data['tags'])) {
            $product->tags()->sync($data['tags']);
        }

        return response()->json($product->load(['category', 'tags', 'ratings']));
    }

    public function destroy(Product $product)
    {
        // Block deletion if any order references this product
        if (\DB::table('orders')->where('product_id', $product->id)->exists()) {
            return response()->json([
                'success' => false,
                'message' => 'This product has existing orders and cannot be deleted.',
            ], 409);
        }

        // Delete image file from 'products' disk if it exists
        if ($product->image && Storage::disk('products')->exists($product->getRawOriginal('image'))) {
            Storage::disk('products')->delete($product->getRawOriginal('image'));
        }

        // Detach tags and delete product
        $product->tags()->detach();
        $product->delete();

        return response()->json(['success' => true]);
    }

    public function latestDeals()
    {
        // Get 4 latest products with their relations
        $products = Product::with(['category', 'tags', 'ratings'])
            ->orderBy('created_at', 'desc')
            ->take(4)
            ->get();

        return response()->json($products);
    }

    public function show($category, $product)
    {
        $product = Product::with('category')
        ->where('slug', $product)
        ->whereHas('category', function ($q) use ($category) {
        $q->where('slug', $category);
        })
        ->firstOrFail();


        $siteName = 'Imora';

        $productName = $product->name;

        $categoryName = $product->category->name ?? 'Fragrances';

        $seoTitle = "{$productName} | {$categoryName} | {$siteName}";

        $seoDescription = \Illuminate\Support\Str::limit(
            trim(strip_tags($product->description ?? '')),
            155,
            ''
        );

        if (empty($seoDescription)) {
            $seoDescription = "Discover {$productName} at Imora. Explore this fragrance and find your signature scent.";
        }

        $productUrl = url("/{$category}/{$product->slug}");

        $productImage = $product->image
            ? (str_starts_with($product->image, 'http')
                ? $product->image
                : asset(ltrim($product->image, '/')))
            : asset('images/imora-social.jpg');

        return Inertia::render('Product/Show', [
            'product' => $product,

            'seo' => [
                'title' => $seoTitle,
                'description' => $seoDescription,
                'canonical' => $productUrl,
                'image' => $productImage,
                'siteName' => $siteName,
                'type' => 'product',
            ],
        ]);


    }


    public function products(Request $request)
    {

    $filter = $request->query('filter');

    $query = Product::with('category');

    switch ($filter) {
        case 'new':
            $query->orderBy('created_at', 'desc');
            break;
        case 'best':
            $query->where('is_best_seller', true);
            break;
        case 'popular':
            $query->where('is_popular', true);
            break;
        default:
            $query->inRandomOrder();
            break;
    }

    return response()->json($query->limit(6)->get());
    }



}
