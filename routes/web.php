<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DataDashboardController;
use App\Http\Controllers\ProfileController;
use App\Models\Kabupaten;
use App\Models\Kecamatan;
use Illuminate\Contracts\Session\Middleware\AuthenticatesSessions;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $user = Auth::user();
    $kabupaten = Kabupaten::all();
    $kecamatan = Kecamatan::all();
    return Inertia::render('Welcome', [
        "user" => $user,
        "status" => session("status") ?? "",
        "cabang" => $kabupaten,
        "ancab" => $kecamatan,
    ]);
})->name("login");

Route::post('/login', [AuthController::class, "login"]);
Route::post('/logout',[AuthController::class, "logout"])->name('logout');

Route::middleware('auth')->prefix('dashboard')->group(function () {
    Route::get('/', [DataDashboardController::class, "dashboard"])->name("dashboard");
    
    Route::get('/cabang/tambah', [DataDashboardController::class, "cabangTambahPage"])->name("cabang.tambah");
    Route::post('/cabang/add', [DataDashboardController::class, "updateCabang"]);

    Route::get('/cabang/edit/{id}', [DataDashboardController::class, "cabangEdit"])->name("cabang.edit");
    
    Route::put('/cabang/update/{id}', [DataDashboardController::class, "updateCabang"]);
    Route::delete('/cabang/delete/{id}', [DataDashboardController::class, "deleteCabang"])->name("cabang.delete");
});
