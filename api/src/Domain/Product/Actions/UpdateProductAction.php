<?php

namespace Domain\Product\Actions;
use Domain\Product\DataTransferObject\UpdateProductData;
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

        $product->update([
            'name' => $data->name,
            'category_id' => $data->category_id,
            'description' => $data->description,
            'price' => $this->formatPrice($data->price),
            'overdue_dt' => $data->overdue_dt,
        ]);

        return [
          'id' => $data->id,
          'price' => $product->priceToBrl(),
        ];
    }

    protected function formatPrice(string $price): string
    {
        if ( ! is_null($price)) {
            $formattedValue = null;

            $formattedValue = str_replace('.', '', $price);
            $formattedValue = str_replace(',', '.', $formattedValue);

            return $formattedValue;
        }

        return "0.00";
    }
}
