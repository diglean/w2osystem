<?php

namespace Routes\Domain\ProductLog;

use Illuminate\Support\Facades\Route;
use Src\App\Http\Controllers\ProductLog\ListProductlogController;

Route::get('/api/product-log/list', [ListProductlogController::class, '__invoke']);
