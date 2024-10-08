<?php

namespace Routes\Domain\Product;

use Src\App\Http\Controllers\Product\CreateProductController;
use Illuminate\Support\Facades\Route;
use Src\App\Http\Controllers\Product\ListProductController;
use Src\App\Http\Controllers\Product\ReportProductController;
use Src\App\Http\Controllers\Product\UpdateProductController;
use Src\App\Http\Controllers\Product\WithdrawListProductController;
use Src\App\Http\Controllers\Product\WithdrawProductController;

Route::post('api/product/create', [CreateProductController::class, '__invoke']);
Route::put('api/product/update', [UpdateProductController::class, '__invoke']);
Route::get('api/product/list', [ListProductController::class, '__invoke']);

Route::get('api/product/withdraw/list', [WithdrawListProductController::class, '__invoke']);
Route::post('api/product/withdraw', [WithdrawProductController::class, '__invoke']);

Route::get('api/product/report', [ReportProductController::class, '__invoke']);
