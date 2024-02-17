<?php

namespace App\Services;

use App\DTO\SaleDetail;
use App\Models\Product;
use App\Models\Sale;
use App\Models\ProductConfig;

class SalesService
{
    public function listSalesReport(): array
    {
        $saleTable = app(Sale::class)->getTable();
        $productTable = app(Product::class)->getTable();
        $salesReports = Sale::from("{$saleTable} AS sale")->leftJoin("{$productTable} AS product", "sale.product_id", "=", "product.product_id")->selectRaw("sale.*, product.product_name, product.product_id")->orderBy('id', 'desc');
        $totalRecords = $salesReports->count();
        $data = $salesReports->get()->transform(function ($record) {
            return SaleDetail::fromEntity($record);
        });
        return ['total' => $totalRecords, 'records' => $data];
    }

    public function calculateSellingPrice($quantity, $unitCost, $productId): float
    {
        $productConfigs = ProductConfig::where('product_id', $productId);
        if ($productConfigs->count() > 0) {
            $productConfig = $productConfigs->first();
            $cost = $quantity * $unitCost;
            return round(($cost / (1 - $productConfig->profit_margin)) + $productConfig->shipping_cost, 2);
        } else {
            return 0;
        }
    }

    public function saveSaleRecord($saleDetail): void
    {
        $sale = new Sale();
        $sale->product_id = $saleDetail->productId;
        $sale->quantity = $saleDetail->quantity;
        $sale->unit_cost = $saleDetail->unitCost;
        $sale->selling_price = $saleDetail->sellingPrice;
        $sale->created_by = $saleDetail->userId;
        $sale->save();
    }
}
