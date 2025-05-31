<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kecamatan extends Model
{
    //
    protected $table = "kecamatan";

    protected $fillable = [
        "id",
        "nama_kecamatan",
        "id_kabupaten"
    ];

    public function lembaga() {
        return $this->hasMany(Lembaga::class, "id_kecamatan");
    }
}
