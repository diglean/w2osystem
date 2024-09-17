<?php

namespace Src\App\Http\Controllers\ProductLog;

use Domain\ProductLog\Actions\ListProductLogAction;
use Illuminate\Contracts\Routing\ResponseFactory as Response;

class ListProductlogController
{
    public function __construct(
        private readonly Response $response
      ) {
      }
  
      public function __invoke(
          ListProductLogAction $action,
      ) {  
          $response = $action->execute();
  
          return $this->response->json($response, 200);
      }
}