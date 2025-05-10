<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use Illuminate\Contracts\Session\Middleware\AuthenticatesSessions;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $user = Auth::user();
    return Inertia::render('Welcome', [
        "user" => $user
    ]);
})->name("login");

Route::post('/login', [AuthController::class, "login"]);
Route::post('/logout',[AuthController::class, "logout"]);

Route::get('/dashboard', function() {
    return Inertia::render('Dashboard');
})->middleware(["auth"])->name("dashboard");



