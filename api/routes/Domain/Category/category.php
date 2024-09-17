<?php

namespace Routes\Domain\Category;

use Illuminate\Support\Facades\Route;
use Src\App\Http\Controllers\Category\ListCategoryController;

Route::get('/api/category/list', [ListCategoryController::class, '__invoke']);
