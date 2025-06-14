<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lembaga extends Model
{
    //
    protected $table = "lembaga";
    
    protected $fillable = [
        "nama_lembaga",
        "id_provinsi",
        "id_kabupaten",
        "id_kecamatan",
        "id_desa_kelurahan",
        "telepon",
        "email",
        "jenis",
        "format",
        "legalitas_pesantren",
        "jumlah_santri_putra",
        "jumlah_santri_putra",
    ];

    public function provinsi() {
        return $this->belongsTo(Wilayah::class, "id_provinsi");
    }

    public function kabupaten() {
        return $this->belongsTo(Kabupaten::class, "id_kabupaten");
    }

    public function kecamatan() {
        return $this->belongsTo(Kecamatan::class, "id_kecamatan");
    }

    public function kelurahan() {
        return $this->belongsTo(DesaKelurahan::class, "id_desa_kelurahan");
    }

    public function legalitasFormal() {
        return $this->belongsToMany(LegalitasFormal::class, "lembaga_legalitas_formal");
    }
}

