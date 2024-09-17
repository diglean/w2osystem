<?php

namespace Src\App\Http\Controllers\Category;

use Domain\Category\Actions\ListCategoryAction;
use Illuminate\Contracts\Routing\ResponseFactory as Response;

class ListCategoryController
{
  public function __construct(
    private readonly Response $response
  ) {
  }

  public function __invoke(
      ListCategoryAction $action,
  ) {
      $response = $action->execute();

      return $this->response->json($response, 200);
  }
}
