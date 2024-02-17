<?php

namespace App\Services;

use App\DTO\SaleDetail;
use App\Models\Sale;
use App\Models\SaleConfig;

class SalesService
{
    public function listSalesReport(): array
    {
        $saleTable = app(Sale::class)->getTable();
        $salesReports = Sale::from("{$saleTable} AS sale")->selectRaw("sale.quantity, sale.unit_cost, sale.selling_price")->orderBy('id', 'desc');
        $totalRecords = $salesReports->count();
        $data = $salesReports->get()->transform(function ($record) {
            return SaleDetail::fromEntity($record);
        });
        return ['total' => $totalRecords, 'records' => $data];
    }

    public function calculateSellingPrice($quantity, $unitCost): float
    {
        $salesConfig = SaleConfig::select("*")->orderBy('id', 'desc')->first();
        $cost = $quantity * $unitCost;
        return round(($cost / (1 - $salesConfig->profit_margin)) + $salesConfig->shipping_cost,2);
    }

    public function saveSaleRecord($quantity, $unitCost, $sellingPrice, $userId): void
    {
        $sale = new Sale();
        $sale->quantity = $quantity;
        $sale->unit_cost = $unitCost;
        $sale->selling_price = $sellingPrice;
        $sale->created_by = $userId;
        $sale->save();
    }
}
