<?php

namespace Src\App\Http\Controllers\Product;

use Domain\Product\Actions\CreateProductAction;
use Domain\Product\DataTransferObject\CreateProductData;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Http\Request;

class CreateProductController
{
    public function __construct(
      private readonly Response $response
    ) {
    }

    public function __invoke(
        Request $request,
        CreateProductAction $action,
    ) {
        /**
         * Valida os dados da request.
         * As regras estão dentro de CreateProductData
         */
        $data = CreateProductData::from($request->all());

        $response = $action->execute($data);

        return $this->response->json($response, 200);
    }
}
