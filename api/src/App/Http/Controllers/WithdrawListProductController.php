<?php

namespace Src\App\Http\Controllers;

use Domain\Product\Actions\WithdrawListProductAction;
use Illuminate\Contracts\Routing\ResponseFactory as Response;

class WithdrawListProductController
{
  public function __construct(
    private readonly Response $response
  ) {
  }

  public function __invoke(
      WithdrawListProductAction $action,
  ) {
      $response = $action->execute();

      return $this->response->json($response, 200);
  }
}
