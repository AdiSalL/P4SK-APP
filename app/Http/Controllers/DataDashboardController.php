<?php

namespace App\Http\Controllers;

use App\Models\IdentitasCabang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DataDashboardController extends Controller
{
    //
    public function dashboard() {
    $user = Auth::user();
    $identitasCabang = IdentitasCabang::with(['wilayah', 'kabupaten'])->paginate(25); 
    return Inertia::render('Dashboard', [
        "user" => $user,
        "dataCabang" => $identitasCabang
    ]);
    }

    public function cabangEdit() {
    $user = Auth::user();
    $identitasCabang = IdentitasCabang::with(['wilayah', 'kabupaten'])->paginate(25); 
    return Inertia::render('Dashboard', [
        "user" => $user,
        "dataCabang" => $identitasCabang
    ]);
    }
}
