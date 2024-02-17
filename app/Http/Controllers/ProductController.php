<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use App\Services\SalesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    private ?int $userId;

    public function __construct()
    {
        $this->userId = auth()->user()->user_id ?? 0;
    }

    public function listProduct(Request $request): JsonResponse
    {
        try {
            $productService = new ProductService();
            $data = $productService->listProduct();
            return response()->json(['success' => true, 'data' => $data]);
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json(['success' => false, "message" => 'Unable to process. Please try again after some times.']);
        }
    }

    public function getProductConfig(Request $request) : JsonResponse
    {
        try {
            $productId = $request->productId;
            $productService = new ProductService();
            $data = $productService->getProductConfig($productId);
            return response()->json(['success' => true, 'data' => $data]);
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json(['success' => false, "message" => 'Unable to process. Please try again after some times.']);
        }
    }
}
