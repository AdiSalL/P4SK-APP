<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IdentitasCabang extends Model
{
    //
    protected $table = "identitas_cabang";

    public function wilayah() {
        return $this->belongsTo(Wilayah::class, "id_wilayah");
    }

    public function kabupaten() {
        return $this->belongsTo(Kabupaten::class, "id_kabupaten");
    }
    
}
