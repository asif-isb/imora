<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

use App\Models\Setting;
use App\Models\Category;
use App\Models\Product;
use App\Models\Slide;
use App\Models\Menu;
use App\Models\Tag;

use App\Mail\TestMail;

use App\Http\Controllers\OrderController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SitemapController;

/*Route::get('/test-email', function () {
    $data = [
        'name' => 'Test User',
        'email' => 'test@example.com'
    ];

    Mail::to('asif.isb@outlook.com')->send(new TestMail($data));

    return '✅ Test email sent to your_email@example.com';
});*/

Route::get('/', function () {
    $slides = Slide::orderBy('order', 'asc')->get();
    $topDiscountedProducts = Product::with('category')->orderByDesc('discount')->take(2)->get();

    return Inertia::render('Welcome', [
        'slides' => $slides,
        'topDiscountedProducts' => $topDiscountedProducts,
    ]);
});

Route::get('/sitemap.xml', [SitemapController::class, 'index']);


/**************** Admin Routes ******************* */

Route::middleware(['auth'])->prefix('admin')->group(function () {

    Route::get('/dashboard',  [DashboardController::class, 'stats'])->name('dashboard');
    Route::get('/', function () { return redirect()->route('dashboard'); });
    Route::get('/dashboard/stats', [DashboardController::class, 'stats'])->name('dashboard.stats');
    Route::get('/dashboard/home', [DashboardController::class, 'stats'])->name('dashboard.home');



    //Routes for Dashboard Home page
    Route::get('/dashboard/components', function () {
        return Inertia::render('Admin/Components', [
            'title' => 'Welcome to Components Page',
            'description' => 'This is the latest data from the component database.',
        ]);
    })->name('dashboard.components');


    Route::get('/dashboard/pages', function () {
        return Inertia::render('Admin/Pages');
    })->name('dashboard.pages');

     // Products admin page
    Route::get('/dashboard/products', function () {
        return Inertia::render('Admin/Products');
    })->name('dashboard.products');

    // API routes for pages
    Route::prefix('api')->group(function () {
        //Route::get('/pages', [App\Http\Controllers\PageController::class, 'index'])->name('pages.index');
        //Route::get('/pages/{page}', [App\Http\Controllers\PageController::class, 'show'])->name('pages.show');
        //Route::post('/pages', [App\Http\Controllers\PageController::class, 'store'])->te'])->name('pages.update');
        //Route::delete('/pages/{page}', [App\Http\Controllers\PageController::class, 'dname('pages.store');
        //Route::put('/pages/{page}', [App\Http\Controllers\PageController::class, 'updaestroy'])->name('pages.destroy');

        Route::get('/products', [App\Http\Controllers\ProductController::class, 'index'])->name('products.index');
        Route::post('/products', [App\Http\Controllers\ProductController::class, 'store'])->name('products.store');
        Route::put('/products/{product}', [App\Http\Controllers\ProductController::class, 'update'])->name('products.update');
        Route::delete('/products/{product}', [App\Http\Controllers\ProductController::class, 'destroy'])->name('products.destroy');

    });


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    //slider
    Route::get('/slider', [SlideController::class, 'index'])->name('slider.index');
    Route::post('/slider/store', [SlideController::class, 'store'])->name('slider.store');
    Route::delete('/slider/{id}', [SlideController::class, 'destroy'])->name('slider.destroy');
    Route::put('/slides/{slide}', [SlideController::class, 'update'])->name('slider.update');
    Route::post('/slider/update-order', [SlideController::class, 'updateOrder'])->name('slider.updateOrder');


    Route::resource('menus', MenuController::class)->names('menu');

    Route::get('dashboard/settings', [AdminController::class, 'settings'])->name('dashboard.settings');
    Route::post('dashboard/settings/saveemail', [AdminController::class, 'saveemail'])->name('dashboard.settings.saveemail');
    Route::post('dashboard/settings/savephone', [AdminController::class, 'savePhone'])->name('dashboard.settings.savephone');

    Route::get('dashboard/categories', [AdminController::class, 'categories'])->name('dashboard.categories');
    Route::post('dashboard/categories/store', [AdminController::class, 'storeCategory'])->name('dashboard.categories.store');
    Route::put('dashboard/categories/{category}', [AdminController::class, 'updateCategory'])->name('dashboard.categories.update');
    Route::delete('dashboard/categories/{category}', [AdminController::class, 'deleteCategory'])->name('dashboard.categories.delete');

    Route::get('dashboard/orders', [OrderController::class, 'index'])->name('dashboard.orders');
    Route::get('dashboard/orders/{order_number}', [OrderController::class, 'show'])->name('dashboard.orders.show');
    Route::post('/dashboard/orders/{orderNumber}/status', [OrderController::class, 'updateStatus'])->name('dashboard.orders.updatestatus');

})->name('admin');


Route::get('/{category}/{product}', [ProductController::class, 'show'])->name('product.show');

// Add this route for categories
Route::get('/admin/api/categories', function () {
    return Category::all();
});
Route::get('/admin/api/tags', function () {
    return Tag::all();
});
Route::get('/api/deals/latest', [App\Http\Controllers\ProductController::class, 'latestDeals']);
//Route::get('/products', [App\Http\Controllers\ProductController::class, 'products']);
Route::get('/getproducts', [App\Http\Controllers\ProductController::class, 'products']);


Route::get('/products-list', function () {
    return Inertia::render('AllProductsPage');
});

Route::get('/menus-json', function () {
    return Menu::with('children')->whereNull('parent_id')->orderBy('order')->get();
});
Route::get('/api/settings/phone', function () {
    return response()->json([
        'phone' => Setting::where('key', 'default_phone')->value('value') ?? 'N/A'
    ]);
});

Route::post('/orders', [OrderController::class, 'store']);

Route::get('/search', [SearchController::class, 'search'])->name('search');

require __DIR__.'/auth.php';
