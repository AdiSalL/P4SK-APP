<?php

namespace App\Http\Controllers;

use App\Models\Anggota;
use App\Models\IdentitasCabang;
use App\Models\Kabupaten;
use App\Models\Wilayah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DataDashboardController extends Controller
{
    //
    public function dashboard() {
        $user = Auth::user();
        $identitasCabang = IdentitasCabang::with(['wilayah', 'kabupaten'])->paginate(25); 
        $dataAnggota = Anggota::with(['wilayah', 'kabupaten','kecamatan','desaKelurahan'])->paginate(25);
        return Inertia::render('Dashboard', [
            "user" => $user,
            "dataCabang" => $identitasCabang,
            "dataAnggota" => $dataAnggota
        ]);
    }

    public function tambahCabang(Request $request) {
        $data = $request->validate([
            'alamat_sekratariat' => 'required|string',
            'kode_cabang' => 'required|string',
            'tanggal_la' => 'required|date',
            'rois_dewan_penasihat' => 'required|string',
            'ketua_dewan_harian' => 'required|string',
            'sekrataris_umum' => 'required|string',
            'bendahara_umum' => 'required|string',
            'id_wilayah' => 'required|exists:wilayah,id',
            'id_kabupaten' => 'required|exists:kabupaten,id',
        ]);

        IdentitasCabang::create($data);
        return redirect()->route('dashboard')->with('status', "Data cabang berhasil diubah");
  
    }

    public function cabangTambahPage() {
        $user = Auth::user();
        $wilayahList = Wilayah::all();
        $kabupatenList = Kabupaten::all();
        return Inertia::render('Data/TambahCabang', [
            "user" => $user,
            "wilayahList" => $wilayahList,
            "kabupatenList" => $kabupatenList,
        ]);

    }

    public function cabangEdit($id) {
        $user = Auth::user();
        $identitasCabang = IdentitasCabang::with(['wilayah', 'kabupaten'])->where("id", $id)->first(); 
        $wilayahList = Wilayah::all();
        $kabupatenList = Kabupaten::all();
        return Inertia::render('Data/EditCabang', [
            "user" => $user,
            "dataCabang" => $identitasCabang,
            "wilayahList" => $wilayahList,
            "kabupatenList" => $kabupatenList,
        ]);
    }

    public function updateCabang(Request $request, $id) {
        $data = $request->validate([
            'alamat_sekratariat' => 'required|string',
            'kode_cabang' => 'required|string',
            'tanggal_la' => 'required|date',
            'rois_dewan_penasihat' => 'required|string',
            'ketua_dewan_harian' => 'required|string',
            'sekrataris_umum' => 'required|string',
            'bendahara_umum' => 'required|string',
            'id_wilayah' => 'required|exists:wilayah,id',
            'id_kabupaten' => 'required|exists:kabupaten,id',
        ]);

        $identitasCabang = IdentitasCabang::findOrFail($id)->first();

        $identitasCabang->update($data);

        return redirect()->route('dashboard')->with('status', "Data cabang berhasil diubah");
    }

    public function deleteCabang($id) {           
            $identitasCabang = IdentitasCabang::findOrFail($id);
            $identitasCabang->delete();
            return redirect()->route('dashboard')->with('status', "Data cabang berhasil dihapus");
    
    }
}
