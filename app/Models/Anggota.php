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

    public function  gelarDepan(){
        return $this->belongsToMany(GelarDepan::class, "anggota_gelar_depan")->withPivot("urutan")->orderBy("pivot_urutan");
    }

    public function gelarBelakang() {
        return $this->belongsToMany(GelarBelakang::class, "anggota_gelar_belakang")->withPivot("urutan")->orderBy("pivot_urutan");
    }

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
public function scopeVisibleToUser($query, $user)
{
    if ($user->status === 'cabang') {
        return $query->where('id_kabupaten', $user->id_kabupaten);
    } elseif ($user->status === 'ancab') {
        return $query->where('id_kabupaten', $user->id_ancab);
    }

    return $query;
}
}
