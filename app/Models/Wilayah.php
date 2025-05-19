<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wilayah extends Model
{
    //
    protected $table = "wilayah";

    public function identitasCabang() {
        return $this->hasMany(IdentitasCabang::class, "id_wilayah");
    }
}
