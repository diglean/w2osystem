<?php

namespace Domain\Product\Actions;
use Domain\ProductLog\Enum\ProductLogAction;
use Domain\ProductLog\Models\ProductLog;
use Illuminate\Support\Carbon;

class WithdrawProductAction
{
  public function __construct(
    public ProductLog $productModel,
  ) {
  }

  public function execute(int $product_id)
  {
      $this->productModel->create([
        'product_id' => $product_id,
        'action' => ProductLogAction::Withdrawal,
        'dthr' => Carbon::now(),
      ]);
  }
}
