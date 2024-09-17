<?php

namespace Domain\Product\Actions;

use Domain\ProductLog\Actions\CreateProductLogAction;
use Domain\ProductLog\Enums\ProductLogAction;

class WithdrawProductAction
{
  public function __construct(
    public CreateProductLogAction $createProductLogAction,
  ) {
  }

  public function execute(int $product_id)
  {
      /**
       * Cria o log de produto com a ação de retirada.
       */
      $this->createProductLogAction->execute($product_id, ProductLogAction::Withdrawal);
  }
}
