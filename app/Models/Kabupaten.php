<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kabupaten extends Model
{
    //
    protected $table = "kabupaten";

    public function identitasCabang() {
        return $this->hasMany(IdentitasCabang::class, "id_kabupaten");
    }

    public function anggota() {
        return $this->hasMany(Anggota::class, "id_kabupaten");
    }

    public function lembaga() {
        return $this->hasMany(Lembaga::class, "id_kabupaten");
    }
}
