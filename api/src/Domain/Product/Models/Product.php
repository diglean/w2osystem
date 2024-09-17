<?php

namespace Domain\Product\Models;

use Domain\Category\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
  use HasFactory;
  public $table = 'products';

  protected $guarded = [];

  public function category(): BelongsTo
  {
    return $this->belongsTo(Category::class, 'category_id');
  }

  public function priceToBrl(): string
  {
    $this->price = floatval($this->price);

    // Use number_format to format the number with 2 decimals, a comma as the decimal separator, and a dot as the thousands separator
    return $this->price = number_format($this->price, 2, ',', '.');
  }
}
