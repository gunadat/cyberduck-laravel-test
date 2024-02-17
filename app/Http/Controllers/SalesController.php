<?php

namespace App\Http\Controllers;

use App\Services\SalesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class SalesController extends Controller
{
    private ?int $userId;

    public function __construct()
    {
        $this->userId = auth()->user()->user_id ?? 0;
    }

    public function listSales(Request $request): JsonResponse
    {
        try {
            $saleService = new SalesService();
            $data = $saleService->listSalesReport();
            return response()->json(['success' => true, 'total' => $data['total'], 'data' => $data['records']]);
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json(['success' => false, "message" => 'Unable to process. Please try again after some times.']);
        }
    }

    public function saveSale(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'quantity' => 'required|min:1',
                'unit_cost' => 'required|min:1',
            ]);
            if ($validator->fails()) {
                return response()->json(['success' => false, "message" => $validator->errors()]);
            }
            $quantity = $request->quantity;
            $unitCost = sprintf("%.2f", $request->unit_cost);

            $saleService = new SalesService();
            $sellingPrice = $saleService->calculateSellingPrice($quantity, $unitCost);
            $sellingPrice = sprintf("%.2f", $sellingPrice);

            $saleService->saveSaleRecord($quantity, $unitCost, $sellingPrice, $this->userId);
            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json(['success' => false, "message" => 'Unable to process. Please try again after some times.']);
        }
    }
}
