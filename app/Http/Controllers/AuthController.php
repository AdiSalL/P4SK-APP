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
            "status" => "required|string|in:pusat,cabang,ancab",
            "password" => "required|string",
            "cabang" => "nullable|integer|exists:kabupaten,id",
            "ancab" => "nullable|integer|exists:kecamatan,id",
        ]);

        $pengurus = Pengurus::where("status", $user["status"]);

        if($user["status"] == "cabang") {
            if(!isset($user["cabang"])) {
                return redirect()->back()->withErrors(["status" => "Cek data apakah sudah terisi !"]);
            }
            $pengurus->where("id_kabupaten", $user["cabang"]);
        }

        if($user["status"] == "ancab") {
            if (!isset($user["cabang"]) || !isset($user["ancab"])) {
                return back()->withErrors(["status" => "Kabupaten dan Kecamatan harus diisi untuk login sebagai ancab."]);
            }
            $pengurus->where("id_kabupaten", $user["cabang"])->where("id_ancab", $user["ancab"]);
        }

        $userPengurus = $pengurus->first();

        if (!$pengurus || !Hash::check($user['password'], $userPengurus->password)) {
            return redirect()->back()->withErrors(["status" => "Terjadi kesalahan! cek username dan password"]);
        }

        Auth::login($userPengurus);
        return redirect()->route("dashboard");
    }


    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route("login")->with("status", "Keluar dari akun");
    }
}