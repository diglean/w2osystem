<?php

namespace Domain\ProductLog\Models;
use Illuminate\Database\Eloquent\Model;

class ProductLog extends Model
{
    public $timestamps = false;

    public $table = 'product_log';

    protected $guarded = [];
}
