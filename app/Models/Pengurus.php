<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable; // <-- This is important
use Illuminate\Notifications\Notifiable;

class Pengurus extends Authenticatable
{
    //
    use Notifiable;

    protected $table = 'users'; // if your table name is not the plural of the model name

    protected $fillable = [
        'status',
        'password',
        'id_kabupaten',
        'id_ancab',
        // other fields
    ];

    public function cabang():BelongsTo {
        return $this->belongsTo(Kabupaten::class, "id", "id_kabupaten");
    }

    public function ancab():BelongsTo {
        return $this->belongsTo(Kecamatan::class, "id", "id_ancab");
    }

    protected $hidden = [
        'password',
    ];

}
