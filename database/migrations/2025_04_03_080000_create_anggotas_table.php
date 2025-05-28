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
        Schema::create('anggotas', function (Blueprint $table) {
            $table->id();
            $table->string("name");

            // Wilayah hierarchy
            $table->unsignedBigInteger("id_wilayah")->nullable(); // provinsi
            $table->unsignedBigInteger("id_kabupaten")->nullable();
            $table->unsignedBigInteger("id_kecamatan")->nullable();
            $table->unsignedBigInteger("id_desa_kelurahan")->nullable();

            

            $table->enum("status", ["aktif", "tidak"]);
            $table->string("keterangan")->nullable();
            $table->string("nia")->unique();
            $table->string("dusun")->nullable();
            $table->string("rt")->nullable();
            $table->string("rw")->nullable();
            $table->string("nama_jalan")->nullable();
            $table->string("gang")->nullable();
            $table->string("no")->nullable();
            $table->timestamps();

            // Foreign keys
            $table->foreign("id_wilayah")->references("id")->on("wilayah")->onDelete('cascade');
            $table->foreign("id_kabupaten")->references("id")->on("kabupaten")->onDelete('cascade');
            $table->foreign("id_kecamatan")->references("id")->on("kecamatan")->onDelete('cascade');
            $table->foreign("id_desa_kelurahan")->references("id")->on("desa_kelurahan")->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anggotas');
    }
};
