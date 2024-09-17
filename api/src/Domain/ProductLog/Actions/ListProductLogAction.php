<?php

namespace Domain\ProductLog\Actions;

use Domain\ProductLog\Actions\CreateProductLogAction;
use Domain\ProductLog\Models\ProductLog;

class ListProductLogAction
{
    public function __construct(
        public ProductLog $productLogModel,
        public CreateProductLogAction $createProductLogAction,
    ) {
    }

    public function execute()
    {
        return $this->productLogModel->with('product')->paginate(10);
    }
}
