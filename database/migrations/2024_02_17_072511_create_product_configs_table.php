<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_configs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id');
            $table->decimal('profit_margin', 2,2);
            $table->decimal('shipping_cost', 2,2);
            $table->integer('created_by');
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_configs');
    }
};
