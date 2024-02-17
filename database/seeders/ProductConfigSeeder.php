<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductConfigSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array(
            array('product_id' => 1, 'profit_margin' => '0.25', 'shipping_cost' => '10.00', 'created_by' => 0, 'created_at' => Carbon::now(), 'updated_at' => NULL),
            array('product_id' => 2, 'profit_margin' => '0.15', 'shipping_cost' => '10.00', 'created_by' => 0, 'created_at' => Carbon::now(), 'updated_at' => NULL),
        );
        DB::table('product_configs')->insert($data);
    }
}
