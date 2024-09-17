<?php

namespace Src\App\Http\Controllers;

use Domain\Product\Actions\ReportProductAction;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use Illuminate\Http\Request;

class ReportProductController
{
  public function __construct(
    private readonly Response $response
  ) {
  }

  public function __invoke(
      Request $request,
      ReportProductAction $action,
  ) {
      $response = $action->execute();

      return $this->response->json($response, 200);
  }
}
