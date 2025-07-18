<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class KabupatenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kabupaten')->insert([
            [
                'kode_cabang' => 'CBG-001',
                'nama_kabupaten' => 'Kabupaten Sleman',
                'id_provinsi' => 1, // Sesuaikan dengan ID provinsi yang ada
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'kode_cabang' => 'CBG-002',
                'nama_kabupaten' => 'Kabupaten Bantul',
                'id_provinsi' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'kode_cabang' => 'CBG-003',
                'nama_kabupaten' => 'Kabupaten Kulon Progo',
                'id_provinsi' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]
        ]);
    }
}
