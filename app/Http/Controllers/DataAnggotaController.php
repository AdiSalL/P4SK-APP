<?php

namespace App\Http\Controllers;

use App\Models\Anggota;
use App\Models\DesaKelurahan;
use App\Models\Kabupaten;
use App\Models\Kecamatan;
use App\Models\Wilayah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DataAnggotaController extends Controller
{
    //
    public function addPage() {
        $wilayahList = Wilayah::all();
        $kabupatenList = Kabupaten::all();
        $kecamatanList = Kecamatan::all();
        $desaList = DesaKelurahan::all();
        return Inertia::render("Data/TambahAnggota", [
        "wilayahList" => $wilayahList,
        "kabupatenList" => $kabupatenList,
        "kecamatanList" => $kecamatanList,
        "desaList" => $desaList,
        ]);
    }

    public function addAnggota(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'nia' => 'required|string|max:100',
            'id_wilayah' => 'required|exists:wilayah,id',
            'id_kabupaten' => 'required|exists:kabupaten,id',
            'id_kecamatan' => 'required|exists:kecamatan,id',
            'id_desa_kelurahan' => 'nullable|exists:desa_kelurahan,id',
            'rt' => 'nullable|string|max:10',
            'rw' => 'nullable|string|max:10',
            'nama_jalan' => 'nullable|string|max:255',
            'dusun' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:100',
            'keterangan' => 'nullable|string|max:255',
        ]);
        Anggota::create($validated);
        return redirect()->route("dashboard")->with("success", "Anggota Berhasil Ditambahkan");
    }
    
    public function edit(Request $request, $id) {
        
    }
}
