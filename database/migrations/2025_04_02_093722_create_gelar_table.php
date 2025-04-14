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
            $table->unsignedBigInteger("user_id");
            $table->foreign("user_id")->references("anggota")->on("id");
            $table->unsignedBigInteger("id_gelar_depan");
            $table->foreign("id_gelar_depan")->references("gelar_depan")->on("id");
            $table->unsignedBigInteger("id_gelar_belakang");
            $table->foreign("id_gelar_belakang")->references("gelar_belakang")->on("id");
            $table->timestamps();
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
