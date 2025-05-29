<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GelarBelakangSeeder extends Seeder
{
    public function run(): void
    {
        $gelarBelakang = [
            'M.Hum.',
            'M.Pd.',
            'M.Pd.I.',
            'M.Psi.',
            'M.Si.',
            'S.Ag.',
            'S.E.',
            'S.H.',
            'S.Kom.',
            'S.Pd.',
            'S.Pd.I.',
            'S.Psi.',
            'S.Sos.',
            'S.Th.I.',
        ];

        DB::table('gelar_belakang')->insert(
            array_map(fn($nama) => ['nama' => $nama], $gelarBelakang)
        );
    }
}
