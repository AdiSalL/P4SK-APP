<?php

namespace App\Http\Controllers;

use App\Models\Pengurus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        
        if(Auth::attempt($user)) {
            return redirect()->route("dashboard");
        }
        
    }


    public function logout(Request $request) {
        Auth::logout();

        return redirect()->route("/login");
    }
}
