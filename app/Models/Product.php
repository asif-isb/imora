<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Tag;
use App\Models\ProductRating;

class Product extends Model
{

    protected $fillable = [
        'name',
        'category_id',
        'description',
        'price',
        'discount',
        'image',
        'rating',
        'is_best_seller',
        'is_popular',
        'slug',
    ];



    public function getFinalPriceAttribute()
    {
        return $this->price - ($this->price * $this->discount) / 100;
    }

    public function getIsNewAttribute()
    {
        return $this->created_at >= now()->subDays(14);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'product_tag');
    }

    public function ratings()
    {
        return $this->hasMany(ProductRating::class);
    }

    public function getImageAttribute($value)
    {
        return asset('products/' . $value);
    }
}
