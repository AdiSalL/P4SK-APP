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
        //
        Schema::create('anggota_gelar_depan' , function (Blueprint $table) {
            $table->id();
            $table->foreignId("anggota_id")->constrained()->onDelete("cascade");
            $table->foreignId("gelar_depan_id")->constrained("gelar_depan")->onDelete("cascade");
            $table->unsignedTinyInteger("urutan");
            $table->timestamps();

            $table->unique(["anggota_id", "gelar_depan_id"]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::drop("anggota_gelar_depan");
    }
};
