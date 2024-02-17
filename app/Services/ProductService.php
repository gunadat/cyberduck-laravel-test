<?php

namespace App\Services;

use App\Models\Product;
use App\Models\ProductConfig;

class ProductService
{
    public function listProduct()
    {
        return Product::select('*')->orderBy('product_id', 'asc')->get();
    }

    public function getProductConfig($productId)
    {
        $productConfig = ProductConfig::where('product_id', $productId);
        if($productConfig->count()>0){
            return $productConfig->first();
        }else{
            return null;
        }

    }
}
