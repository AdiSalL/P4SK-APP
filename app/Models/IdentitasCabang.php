<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IdentitasCabang extends Model
{
    //
    protected $table = "identitas_cabang";

    protected $fillable = [
            'alamat_sekratariat',
            'kode_cabang',
            'tanggal_la',
            'rois_dewan_penasihat',
            'ketua_dewan_harian',
            'sekrataris_umum',
            'bendahara_umum',
            'id_wilayah',
            'id_kabupaten',
    ];

    public function wilayah() {
        return $this->belongsTo(Wilayah::class, "id_wilayah");
    }

    public function kabupaten() {
        return $this->belongsTo(Kabupaten::class, "id_kabupaten");
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
