<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use Illuminate\Contracts\Session\Middleware\AuthenticatesSessions;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name("login");

Route::post('/login', [AuthController::class, "login"]);
Route::post('/logout',[AuthController::class, "logout"]);

Route::get('/dashboard', function() {
    return Inertia::render('Dashboard');
})->middleware(["auth"])->name("dashboard");



