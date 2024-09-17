<?php

namespace Domain\Product\Actions;
use Domain\Product\Models\Product;

class WithdrawListProductAction
{
  public function __construct(
    public Product $productModel,
  ) {
  }

  public function execute()
  {
      return $this->productModel->get();
  }
}
