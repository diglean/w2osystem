<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Domain\Product\Models\Product;
use Domain\ProductLog\Models\ProductLog;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Product::factory(100)->create();

        ProductLog::factory(100)->create();
    }
}
