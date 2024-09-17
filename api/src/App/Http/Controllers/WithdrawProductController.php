<?php

namespace Src\App\Http\Controllers;

use Domain\Product\Actions\WithdrawProductAction;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class WithdrawProductController
{
  public function __construct(
    private readonly Response $response
  ) {
  }

  public function __invoke(
      Request $request,
      WithdrawProductAction $action,
  ) {
      $data = $request->all();

      /**
       * São poucos dados então não acho que
       * valha a pena fazer um DTO apenas para esse caso
       */
      $validator = Validator::make(
        data: $data,
        rules: ['id' => ['required', 'integer', 'min:1']],
        messages: ['id.*' => 'Código do modelo é obrigatório!'],
      );

      if ($validator->fails()) {
        throw new ValidationException($validator);
      }

      $response = $action->execute($data['id']);

      return $this->response->json($response, 200);
  }
}
