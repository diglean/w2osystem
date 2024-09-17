<?php

namespace Database\Factories\Domain\ProductLog\Models;

use Domain\Product\Models\Product;
use Domain\ProductLog\Enums\ProductLogAction;
use Domain\ProductLog\Models\ProductLog;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductLogFactory extends Factory
{
    protected $model = ProductLog::class;

    public function definition(): array
    {
        $products = Product::count();

        return [
          'product_id' => fake()->numberBetween(1, $products),
          'action' => fake()->randomElement(ProductLogAction::cases()),
          'dthr' => fake()->datetime(),
        ];
    }
}
