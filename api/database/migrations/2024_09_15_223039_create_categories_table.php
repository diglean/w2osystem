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
          CREATE TABLE `categories` (
            `id` SMALLINT NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(30) NOT NULL UNIQUE,
            `active` ENUM('no', 'yes') NOT NULL DEFAULT 'yes',
            PRIMARY KEY (`id`)
          );
          SQL
        );

        DB::unprepared(
          <<<SQL
          INSERT INTO `categories` (`name`, `active`)
          VALUES
            ('Alimentos', 'yes'),
            ('Acessórios', 'yes'),
            ('Ferramentas', 'yes'),
            ('Calçados', 'yes'),
            ('Roupas', 'yes');
          SQL,
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared('DROP TABLE IF EXISTS `categories`;');
    }
};
