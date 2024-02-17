<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalesConfigSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array(
            array('profit_margin' => '0.25', 'shipping_cost' => '10.00', 'created_by' => 0, 'created_at' => Carbon::now(), 'updated_at' => NULL)
        );
        DB::table('sales_config')->insert($data);
    }
}
