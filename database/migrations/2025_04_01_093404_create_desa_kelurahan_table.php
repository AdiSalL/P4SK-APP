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
        Schema::create('desa_kelurahan', function (Blueprint $table) {
            $table->id();
            $table->string("nama_desa");
            $table->unsignedBigInteger("id_kecamatan");
            $table->foreign("id_kecamatan")->references("id")->on("kecamatan")->onDelete('cascade');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('desa_kelurahan');
    }
};
