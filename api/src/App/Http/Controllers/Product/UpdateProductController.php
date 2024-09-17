<?php

namespace Src\App\Http\Controllers\Product;

use Domain\Product\Actions\UpdateProductAction;
use Domain\Product\DataTransferObject\UpdateProductData;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Http\Request;

class UpdateProductController
{
  public function __construct(
    private readonly Response $response
  ) {
  }

  public function __invoke(
      Request $request,
      UpdateProductAction $action,
  ) {
      $data = UpdateProductData::from($request->all());

      $response = $action->execute($data);

      return $this->response->json($response, 200);
  }
}
