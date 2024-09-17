<?php

namespace Database\Factories\Domain\Product\Models;

use Domain\Product\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition(): array
      {
          return [
              'name' => fake()->name(),
              'category_id' => fake()->numberBetween(1, 5),
              'description' => fake()->sentence(),
              'price' => fake()->randomFloat(2, 0, 100),
              'overdue_dt' => fake()->dateTime(),
              'created_at' => fake()->dateTime(),
              'updated_at' => fake()->dateTime(),
          ];
      }
}
