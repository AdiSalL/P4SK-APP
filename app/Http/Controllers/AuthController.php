<?php

namespace App\Http\Controllers;

use App\Models\Pengurus;
use Illuminate\Hashing\BcryptHasher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    //
    public function login(Request $request) {
        
        $user = $request->validate([
            "status" => "required",
            "password" => "required"
        ]);
        
        $pengurus = Pengurus::where("status", $user["status"])->first();
        $pengurusPusat = Pengurus::where("status", "pusat")->first();

        if (!$pengurus || !Hash::check($user['password'], $pengurus->password)) {
            return redirect()->back()->withErrors(["status" => "Terjadi kesalahan! cek username dan password"]);
        }

        if($user["status"] == "pusat" && Hash::check($user['password'], $pengurusPusat->password)) {
            Auth::attempt($user );
            return redirect()->route("dashboard");
        }
        
        
    }


    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route("login")->with("status", "Keluar dari akun");
    }
}
