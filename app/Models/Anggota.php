<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use function PHPSTORM_META\map;

class Anggota extends Model
{
    //
    protected $table = "anggotas";

    protected $fillable = [
        'name', 'nia', 'id_wilayah', 'id_kabupaten', 'id_kecamatan', 'id_desa_kelurahan',
        'status', 'keterangan', 'dusun', 'rt', 'rw', 'nama_jalan', 'gang', 'no'
    ];
    
    public function wilayah() {
        return $this->belongsTo(Wilayah::class, "id_wilayah");
    }

    public function kabupaten() {
        return $this->belongsTo(Kabupaten::class, "id_kabupaten");
    }
    
    public function kecamatan() {
        return $this->belongsTo(Wilayah::class, "id_kecamatan");
    }
    
    public function desaKelurahan() {
        return $this->belongsTo(DesaKelurahan::class, "id_desa_kelurahan");
    }
}
