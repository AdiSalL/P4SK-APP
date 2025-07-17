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
        Schema::create('identitas_cabang', function (Blueprint $table) {
            $table->id();
            $table->string("alamat_sekratariat");
            $table->string("kode_cabang");
            $table->date("tanggal_la_awal");
            $table->date("tanggal_la_akhir");
            $table->string("rois_dewan_penasihat");
            $table->string("ketua_dewan_harian");
            $table->string("sekrataris_umum");
            $table->string("bendahara_umum");
            $table->unsignedBigInteger("id_wilayah"); 
            $table->unsignedBigInteger("id_kabupaten");
            $table->foreign("id_wilayah")->references("id")->on("wilayah")->onDelete('cascade');
            $table->foreign("id_kabupaten")->references("id")->on("kabupaten")->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('identitas_cabang');
    }
};
