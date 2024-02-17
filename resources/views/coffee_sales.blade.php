<x-app-layout>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" defer></script>
    <script src="https://cdn.datatables.net/2.0.0/js/dataTables.js" defer></script>
    <script src="https://cdn.datatables.net/2.0.0/js/dataTables.bootstrap5.js" defer></script>

    <script src="{{ asset('js/coffee_sale.js') }}" defer></script>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('New ☕️ Sales') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form method="POST" action="" id="salesForm">
                        <div class="row mb-2">
                            <div class="col-3 mb-3">
                                <label for="product" class="form-label">Product</label>
                                <select class="form-select" name="product" id="product">
                                    <option value="">--Select--</option>
                                </select>
                            </div>
                            <div class="col-2 mb-2">
                                <label for="quantity" class="form-label">Quantity</label>
                                <input type="number" name="quantity" class="form-control" id="quantity" placeholder="1">
                            </div>
                            <div class="col-2 mb-2">
                                <label for="unitCost" class="form-label">Unit Cost (&pound;)</label>
                                <input type="number" name="unitCost" class="form-control" id="unitCost"
                                       placeholder="10">
                            </div>
                            <div class="col-2 mb-2">
                                <label for="sellingPrice" class="form-label">Selling Price</label>
                                <label class="form-control-plaintext" id="sellingPrice"></label>
                            </div>
                            <div class="col-2 mb-2">
                                <button type="submit" class="btn btn-success btn-sm recordSale"
                                        style="margin-top: 33px;">
                                    Record Sale
                                </button>
                            </div>
                            <div class="row mb-2 showSuccess" style="display: none;">
                                <div class="alert alert-success">
                                    <span>Sale record saved successfully </span>
                                </div>
                            </div>
                            <div class="row mb-2 errorDiv" style="display: none;">
                                <div class="alert alert-danger">
                                    <span class="errorText"></span>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="row">
                        <div class="col-md-3 col-3">
                            <h3>Previous Sales</h3>
                        </div>
                        <div class="col-md-9 col-9">
                            <h6 style="float:right;">Total Records : <span id="totalRecords"></span></h6>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="table-responsive">
                            <table class="table table-responsive table-bordered table-striped" id="salesReport">
                                <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Unit Cost (&pound;)</th>
                                    <th>Selling Price</th>
                                </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
