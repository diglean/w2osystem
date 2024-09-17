<?php

namespace Domain\Product\Lib;

class Formater
{
    /**
     * Formata o preço 1.500,00 -> 1500.00
     */
    public function formatPrice(string $price): string
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