<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DataAnggotaController;
use App\Http\Controllers\DataDashboardController;
use App\Http\Controllers\DataLembagaController;
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
    
    Route::middleware('role:pusat')->group((function () {
        Route::get('/cabang/tambah', [DataDashboardController::class, "cabangTambahPage"])->name("cabang.tambah");
        Route::post('/cabang/add', [DataDashboardController::class, "tambahCabang"])->name("cabang.tambah.data");
        Route::get('/cabang/edit/{id}', [DataDashboardController::class, "cabangEdit"])->name("cabang.edit");
        Route::put('/cabang/update/{id}', [DataDashboardController::class, "updateCabang"]);
        Route::delete('/cabang/delete/{id}', [DataDashboardController::class, "deleteCabang"])->name("cabang.delete");

        Route::get('/anggota/tambah', [DataAnggotaController::class, "addPage"])->name("anggota.tambah");
        Route::post('/anggota/add', [DataAnggotaController::class, "addAnggota"])->name("anggota.tambah.data");
        Route::get('/anggota/ubah/{id}', [DataAnggotaController::class, "edit"])->name("anggota.update");
        Route::put("/anggota/update/{id}", [DataAnggotaController::class, "update"])->name("anggota.update.data");
        Route::delete('/anggota/delete/{id}', [DataAnggotaController::class, "delete"])->name("anggota.delete");

        Route::get('/lembaga/tambah', [DataLembagaController::class, 'create'])->name('lembaga.tambah');
        Route::post('/lembaga/add', [DataLembagaController::class, 'store'])->name('lembaga.tambah.data');
        Route::get('/lembaga/edit/{id}', [DataLembagaController::class, 'edit'])->name('lembaga.edit');
        Route::put('/lembaga/update/{id}', [DataLembagaController::class, 'update'])->name('lembaga.update');
        Route::delete('/lembaga/delete/{id}', [DataLembagaController::class, 'destroy'])->name('lembaga.delete');

    }));
});
