<?php

namespace Domain\ProductLog\Enum;

enum ProductLogAction: string
{
    case Deposit = 'deposit';

    case Withdrawal = 'withdrawal';
}
