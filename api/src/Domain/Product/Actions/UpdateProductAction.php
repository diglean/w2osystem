<?php

namespace Domain\Product\Actions;
use Domain\Product\DataTransferObject\UpdateProductData;
use Domain\Product\Lib\Formater;
use Domain\Product\Models\Product;

class UpdateProductAction
{
    public function __construct(
      public Product $productModel,
    ) {
    }

    public function execute(UpdateProductData $data): array
    {
        $product = $this->productModel->findOrFail($data->id);

        $formater = new Formater();

        $product->update([
            'name' => $data->name,
            'category_id' => $data->category_id,
            'description' => $data->description,
            'price' => $formater->formatPrice($data->price),
            'overdue_dt' => $data->overdue_dt,
        ]);

        return [
          'id' => $data->id,
          'price' => $product->priceToBrl(),
        ];
    }    
}
