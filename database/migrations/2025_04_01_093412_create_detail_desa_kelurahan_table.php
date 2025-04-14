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
        Schema::create('detail_desa_kelurahan', function (Blueprint $table) {
            $table->id();
            $table->string("detail_desa"); // e.g. RT 02 RW 03 Jl. Mawar
            $table->unsignedBigInteger("id_desa_kelurahan");
            $table->foreign("id_desa_kelurahan")->references("id")->on("desa_kelurahan")->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_desa_kelurahan');
    }
};
