<?php

namespace App\Models;


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

    protected $hidden = [
        'password',
    ];

}
