<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GelarDepanSeeder extends Seeder
{
    public function run(): void
    {
        $gelarDepan = [
            ['nama' => 'Dr.'],
            ['nama' => 'Ir.'],
            ['nama' => 'R.'],
            ['nama' => 'Ust.'],
            ['nama' => 'KH.'],
            ['nama' => 'K.'],
            ['nama' => 'H.'],
        ];

        DB::table('gelar_depan')->insert($gelarDepan);
    }
}
