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
      /**
       * Retorna os produtos que estão disponíveis para retirada
       */
      return $this->productModel->get();
  }
}
