<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared(
          <<<SQL
          CREATE TABLE `product_log` (
            `id` SMALLINT NOT NULL AUTO_INCREMENT,
            `product_id` SMALLINT NOT NULL,
            `action` ENUM('deposit', 'withdrawal') NOT NULL DEFAULT 'deposit',
            `dthr` DATETIME NOT NULL,
            PRIMARY KEY (`id`),
            CONSTRAINT `fk_product_id`
            FOREIGN KEY (`product_id`)
            REFERENCES `products` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
          );
          SQL,
        );

        DB::unprepared(
            <<<SQL
            CREATE INDEX idx_product_id ON product_log (product_id);
            SQL,
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared('DROP TABLE IF EXISTS `product_log`;');
    }
};
