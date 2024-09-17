<?php

namespace Domain\ProductLog\Enums;

enum ProductLogAction: string
{
    case Deposit = 'deposit';

    case Withdrawal = 'withdrawal';
}
