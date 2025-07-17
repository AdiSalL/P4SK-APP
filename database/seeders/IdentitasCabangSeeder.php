<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class IdentitasCabangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('identitas_cabang')->insert([
            [
                'alamat_sekratariat' => 'Jl. Merdeka No. 123, Klaten',
                'kode_cabang' => 'CB001',
                'tanggal_la_awal' => '2023-01-15',
                'tanggal_la_akhir' => '2024-01-15',
                'rois_dewan_penasihat' => 'KH. Ahmad Dahlan',
                'ketua_dewan_harian' => 'Drs. Budi Santoso',
                'sekrataris_umum' => 'Siti Aminah',
                'bendahara_umum' => 'Muhammad Yusuf',
                'id_wilayah' => 1,
                'id_kabupaten' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'alamat_sekratariat' => 'Jl. Sukabumi No. 45, Bandung',
                'kode_cabang' => 'CB002',
                'tanggal_la_awal' => '2023-01-15',
                'tanggal_la_akhir' => '2024-01-15',
                'rois_dewan_penasihat' => 'KH. Hasan Basri',
                'ketua_dewan_harian' => 'Dr. Nina Fauziah',
                'sekrataris_umum' => 'Ali Mukti',
                'bendahara_umum' => 'Rahmawati',
                'id_wilayah' => 1,
                'id_kabupaten' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            // Tambahkan data lain di sini jika mau
        ]);
    }
}
