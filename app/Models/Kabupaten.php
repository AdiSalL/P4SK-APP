<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kabupaten extends Model
{
    //
    protected $table = "kabupaten";

    protected $fillable = [
        "id",
        "kode_cabang",
        "nama_kabupaten",
        "id_provinsi"
    ];

    public function identitasCabang() {
        return $this->hasMany(IdentitasCabang::class, "id_kabupaten");
    }

    public function anggota() {
        return $this->hasMany(Anggota::class, "id_kabupaten");
    }

    public function lembaga() {
        return $this->hasMany(Lembaga::class, "id_kabupaten");
    }

    public function pengurus() {
        return $this->hasMany(Pengurus::class, "id_kabupaten", "id");
    }
}
