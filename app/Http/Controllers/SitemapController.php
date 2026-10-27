<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Cache;

class SitemapController extends Controller
{
    public function index()
    {
        $xml = Cache::remember('sitemap.xml', 3600, function () {
            $out = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
            $out .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

            // Homepage
            $out .= $this->urlTag(url('/'), null, 'daily', '1.0');

            // Products
            Product::with('category:id,slug')
                ->select('id', 'slug', 'category_id', 'updated_at')
                ->chunkById(500, function ($products) use (&$out) {
                    foreach ($products as $product) {
                        if (!$product->category || !$product->slug) {
                            continue;
                        }

                        $out .= $this->urlTag(
                            url("/{$product->category->slug}/{$product->slug}"),
                            optional($product->updated_at)->toAtomString(),
                            'weekly',
                            '0.8'
                        );
                    }
                });

            $out .= '</urlset>';

            return $out;
        });

        return response($xml, 200)->header('Content-Type', 'application/xml');
    }

    private function urlTag(string $loc, ?string $lastmod, string $changefreq, string $priority): string
    {
        $tag = "  <url>\n    <loc>" . e($loc) . "</loc>\n";

        if ($lastmod) {
            $tag .= "    <lastmod>{$lastmod}</lastmod>\n";
        }

        return $tag . "    <changefreq>{$changefreq}</changefreq>\n    <priority>{$priority}</priority>\n  </url>\n";
    }
}