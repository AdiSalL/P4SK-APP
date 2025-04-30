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
        Schema::create('gelar', function (Blueprint $table) {
            $table->id();
            $table->foreignId("anggota_id")->constrained();
            $table->unsignedBigInteger("id_gelar_depan");
            $table->foreign("id_gelar_depan")->references("id")->on("gelar_depan");
            $table->unsignedBigInteger("id_gelar_belakang");
            $table->foreign("id_gelar_belakang")->references("id")->on("gelar_belakang");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gelar');
    }
};
