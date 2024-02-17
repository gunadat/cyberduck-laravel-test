<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array(
            array('product_id' => 1, 'product_name' => 'Gold Coffee', 'product_description' => '', 'created_by' => 0, 'created_at' => Carbon::now(), 'updated_at' => NULL),
            array('product_id' => 2, 'product_name' => 'Arabic Coffee', 'product_description' => '', 'created_by' => 0, 'created_at' => Carbon::now(), 'updated_at' => NULL),
        );
        DB::table('products')->insert($data);
    }
}
