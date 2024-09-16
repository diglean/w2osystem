<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared(
          <<<SQL
          CREATE TABLE `products` (
            `id` SMALLINT NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(30) NOT NULL,
            `category_id` TINYINT NULL,
            `description` VARCHAR(255) NULL,
            `price` FLOAT(8,2) NULL,
            `overdue_dt` DATETIME NULL,
            `created_at` DATETIME NOT NULL,
            `updated_at` DATETIME NOT NULL,
            PRIMARY KEY (`id`),
            CONSTRAINT `fk_category_id`
            FOREIGN KEY (`category_id`)
            REFERENCES `categories` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
          );
          SQL,
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared('DROP TABLE IF EXISTS `products`;');
    }
};
