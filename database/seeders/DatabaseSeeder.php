<?php

namespace Database\Seeders;

use App\Models\GelarBelakang;
use App\Models\GelarDepan;
use App\Models\IdentitasCabang;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $this->call([
            WilayahSeeder::class,
            KabupatenSeeder::class,
            KecamatanSeeder::class,
            PengurusCabangSeeder::class,
            GelarDepanSeeder::class,
            GelarBelakangSeeder::class,
            IdentitasCabangSeeder::class
        ]);

    }
}
