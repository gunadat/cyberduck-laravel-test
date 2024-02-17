<?php

namespace App\DTO;

use App\Models\Sale;

class SaleDetail
{
    public mixed $quantity;
    public mixed $unitCost;
    public mixed $sellingPrice;
    public mixed $createdBy;

    public static function fromEntity(Sale $sale): SaleDetail
    {
        $saleDetail = new SaleDetail();
        $saleDetail->quantity = $sale->quantity;
        $saleDetail->unitCost = $sale->unit_cost;
        $saleDetail->sellingPrice = $sale->selling_price;
        $saleDetail->createdBy = $sale->created_by;
        return $saleDetail;
    }
}
