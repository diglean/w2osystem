<?php

namespace Domain\ProductLog\Actions;
use Domain\ProductLog\Enums\ProductLogAction;
use Domain\ProductLog\Models\ProductLog;
use Illuminate\Support\Carbon;

class CreateProductLogAction
{
    public function __construct(
        public ProductLog $productLogModel,
    ) {
    }

    public function execute(int $product_id, ProductLogAction $action): void
    {
        $this->productLogModel->create([
          'product_id' => $product_id,
          'action' => $action,
          'dthr' => Carbon::now(),
        ]);
    }
}
