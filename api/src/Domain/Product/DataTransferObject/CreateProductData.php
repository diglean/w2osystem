<?php

namespace Domain\Product\DataTransferObject;

use Spatie\LaravelData\Data;

class CreateProductData extends Data
{
    public function __construct(
      public readonly string $name,
      public readonly int $category_id,
      public readonly string $price,
      public readonly ?string $description,
      public readonly ?string $overdue_dt,
    ) {
    }

    public static function rules(): array
    {
      return [
        'name' => ['required', 'string', 'max:30'],
        'category_id' => ['required', 'integer', 'min:1'],
        'description' => ['nullable', 'string', 'max:255'],
        'price' => ['required', 'string'],
        'overdue_dt' => ['nullable', 'string'],
      ];
    }
}
