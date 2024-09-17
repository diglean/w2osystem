<?php

namespace Domain\Product\Actions;

use Domain\Product\DataTransferObject\CreateProductData;
use Domain\Product\Models\Product;
use Domain\ProductLog\Actions\CreateProductLogAction;
use Illuminate\Support\Facades\DB;

class ReportProductAction
{
    public function __construct(
        public Product $productModel,
    ) {
    }

    public function execute(): array
    {
        $topTenProducts = DB::select(
          <<<SQL
          SELECT
            COUNT(`pl`.`product_id`) AS `qty`,
            `p`.`name` AS `product_name`
          FROM `product_log` `pl`
          INNER JOIN `products` `p` ON `p`.`id` = `pl`.`product_id`
          GROUP BY `pl`.`product_id`, `p`.`name`
          ORDER BY COUNT(`pl`.`product_id`) DESC
          LIMIT 10;
          SQL,
        );

        $qtyProducts = $this->productModel->count();

        $topThreeCategories = DB::select(
          <<<SQL
          SELECT
            COUNT(`pl`.`id`) AS `qty`,
            `c`.`name` AS `category_name`
          FROM `product_log` `pl`
          INNER JOIN `products` `p` ON `p`.`id` = `pl`.`product_id`
          INNER JOIN `categories` `c` ON `c`.`id` = `p`.`category_id`
          GROUP BY `c`.`id`, `c`.`name`
          ORDER BY COUNT(`pl`.`product_id`) DESC
          LIMIT 3;
          SQL,
        );

        return [
          'topTenProducts' => $topTenProducts,
          'qtyProducts' => $qtyProducts,
          'topThreeCategories' => $topThreeCategories,
        ];
    }
}
