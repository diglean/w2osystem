<?php

namespace Domain\Category\Actions;

use Domain\Category\Enums\CategoryActive;
use Domain\Category\Models\Category;
use Illuminate\Database\Eloquent\Collection;

class ListCategoryAction
{
  public function __construct(
    public Category $categoryModel,
  ) {
  }

  /**
   * Lista todas as categorias ativas
   */
  public function execute(): array|Collection
  {
      return $this->categoryModel->where('active', '=', CategoryActive::Yes)->get();
  }
}
