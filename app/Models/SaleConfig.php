<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleConfig extends Model
{
    use HasFactory;

    protected string $tableName = 'sale_configs';
}
