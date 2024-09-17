<?php

namespace Domain\Product\Actions;

use Domain\Product\DataTransferObject\CreateProductData;
use Domain\Product\Models\Product;
use Domain\ProductLog\Actions\CreateProductLogAction;
use Domain\ProductLog\Enums\ProductLogAction;

class CreateProductAction
{
    public function __construct(
        public Product $productModel,
        public CreateProductLogAction $createProductLogAction,
    ) {
    }

    public function execute(CreateProductData $data): Product
    {
        $createdProduct = $this->productModel->create([
            'name' => $data->name,
            'category_id' => $data->category_id,
            'description' => $data->description,
            'price' => $this->formatPrice($data->price),
            'overdue_dt' => $data->overdue_dt,
        ]);

        /**
         * Cria o log de produto
         */
        $this->createProductLogAction->execute($createdProduct->id, ProductLogAction::Deposit);

        return $createdProduct;
    }

    /**
     * Formata o preço 1.500,00 -> 1500.00
     */
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
