<?php

namespace Routes\Domain\Product;

use Src\App\Http\Controllers\CreateProductController;
use Illuminate\Support\Facades\Route;
use Src\App\Http\Controllers\ListProductController;
use Src\App\Http\Controllers\UpdateProductController;
use Src\App\Http\Controllers\WithdrawListProductController;

Route::post('api/product/create', [CreateProductController::class, '__invoke']);
Route::put('api/product/update', [UpdateProductController::class, '__invoke']);
Route::get('api/product/list', [ListProductController::class, '__invoke']);
Route::get('api/product/withdraw/list', [WithdrawListProductController::class, '__invoke']);
