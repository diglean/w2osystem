<?php

namespace Src\App\Http\Controllers\Product;

use Domain\Product\Actions\ListProductAction;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Http\Request;

class ListProductController
{
  public function __construct(
    private readonly Response $response
  ) {
  }

  public function __invoke(
      ListProductAction $action,
  ) {
      $response = $action->execute();

      return $this->response->json($response, 200);
  }
}
