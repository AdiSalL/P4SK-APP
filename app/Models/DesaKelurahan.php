<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DesaKelurahan extends Model
{
    //
    protected $table = "desa_kelurahan";

    protected $fillable = [
        "id",
        "nama_desa",
        "id_kecamatan"
    ];   

    public function anggota() {
        return $this->hasMany(Anggota::class, "id_wilayah");
    }

    public function lembaga() {
        return $this->hasMany(Lembaga::class, "id_desa_kelurahan");
    }
}
