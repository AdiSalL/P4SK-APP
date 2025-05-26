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


    private function generateNIA($kodeCabang) {
        do {
            $randomNumber = str_pad(rand(0, 9999), 6, '0', STR_PAD_LEFT);
            $niaNumber = substr($randomNumber, 0, 2) . '-' . substr($randomNumber, 2);
            $nia =  $kodeCabang . $niaNumber;
        }while(Anggota::where("nia", $nia)->exists());
        
        return $nia;
    }

    public function addAnggota(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
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

        $wilayah = Wilayah::findOrFail($validated["id_wilayah"]);
        $kodeCabang = $wilayah->kode_cabang ?? 'C-00';

        $nia = $this->generateNIA($kodeCabang);
        $anggota = new Anggota();
        strval($validated["rt"]);
        strval($validated["rw"]);
        $anggota->fill($validated);
        $anggota->nia = $nia;
        $anggota->save();

        return redirect()->route("dashboard")->with("success", "Anggota Berhasil Ditambahkan");
    }
    
    public function edit(Request $request, $id) {
        
    }
}
