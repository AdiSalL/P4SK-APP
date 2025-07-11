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
        Schema::create('lembaga', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lembaga');
            $table->unsignedBigInteger('id_provinsi');
            $table->unsignedBigInteger('id_kabupaten');
            $table->unsignedBigInteger('id_kecamatan');
            $table->unsignedBigInteger('id_desa_kelurahan');

            $table->string('telepon')->nullable();
            $table->string('email')->nullable();
            $table->enum('jenis', ['Pesantren', 'TPQ', 'MT', 'Madin']);
            $table->enum('format', ['Tafaqquh', 'Tahfidh', 'Gabungan']);
            $table->enum('legalitas_pesantren', ['Tanda Daftar Keberadaan Pondok Pesantren', 'Belum Terdaftar'])->nullable();
            $table->integer('jumlah_santri_putra')->nullable();
            $table->integer('jumlah_santri_putri')->nullable();
            $table->timestamps();

            // Foreign Keys
            $table->foreign('id_provinsi')->references('id')->on('wilayah')->onDelete('cascade');
            $table->foreign('id_kabupaten')->references('id')->on('kabupaten')->onDelete('cascade');
            $table->foreign('id_kecamatan')->references('id')->on('kecamatan')->onDelete('cascade');
            $table->foreign('id_desa_kelurahan')->references('id')->on('desa_kelurahan')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lembaga');
    }
};
