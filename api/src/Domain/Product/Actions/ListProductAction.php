<?php

namespace Domain\Product\Actions;
use Domain\Product\Models\Product;

class ListProductAction
{
  public function __construct(
    public Product $productModel,
  ) {
  }

  public function execute()
  {
      $rows = $this->productModel->with('category')->paginate(3);
      $transformedItems = $rows->items();

      $transformedItems = collect($transformedItems)->map(function ($product) {
        $product->price = $product->priceToBRL();

        return $product;
      });

      $columns = [
        'Nome',
        'Categoria',
        'Descrição',
        'Preço',
        'Vence em',
        'Criado em',
        'Ação',
      ];

      return [
        'rows' => $rows,
        'columns' => $columns,
      ];
  }
}
