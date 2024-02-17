<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed $quantity
 * @property mixed $unit_cost
 * @property mixed $selling_price
 * @property mixed $created_by
 */
class Sale extends Model
{
    use HasFactory;

    protected string $tableName = 'sales';
    protected $primaryKey = 'id';
}
