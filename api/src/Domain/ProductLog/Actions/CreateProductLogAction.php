<?php

namespace Domain\ProductLog\Actions;
use Domain\ProductLog\Enum\ProductLogAction;
use Domain\ProductLog\Models\ProductLog;
use Illuminate\Support\Carbon;

class CreateProductLogAction
{
    public function __construct(
        public ProductLog $productLogModel,
    ) {
    }

    public function execute(int $product_id): void
    {
        $this->productLogModel->create([
          'product_id' => $product_id,
          'action' => ProductLogAction::Deposit,
          'dthr' => Carbon::now(),
        ]);
    }
}
