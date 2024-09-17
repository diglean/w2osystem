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
      /**
       * Pega os produtos cadastrados exibindo 3 produtos por pagina
       */
      $rows = $this->productModel->with('category')->paginate(3);
      $transformedItems = $rows->items();

      /**
       * Transformando os preços 1500.00 -> 1.500,00
       */
      $transformedItems = collect($transformedItems)->map(function ($product) {
        $product->price = $product->priceToBRL();

        return $product;
      });

      /**
       * Colunas que serão utilizadas no component DataTable.jsx
       */
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
