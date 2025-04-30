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
        Schema::create('pengurus_cabang', function (Blueprint $table) {
            $table->id();
            $table->enum("status", ["pusat", "cabang"]);
            $table->unsignedBigInteger("id_cabang");
            $table->foreign("id_cabang")->references("id")->on("identitas_cabang")->onDelete('cascade');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengurus_cabang');
    }
};
