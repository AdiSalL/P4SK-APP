<?php

namespace App\Http\Controllers;

use App\Models\Anggota;
use App\Models\DesaKelurahan;
use App\Models\GelarBelakang;
use App\Models\GelarDepan;
use App\Models\Kabupaten;
use App\Models\Kecamatan;
use App\Models\Wilayah;
use Exception;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Catch_;

class DataAnggotaController extends Controller
{
    //
    public function addPage() {
        $wilayahList = Wilayah::all();
        $kabupatenList = Kabupaten::all();
        $kecamatanList = Kecamatan::all();
        $desaList = DesaKelurahan::all();
        $gelarDepan = GelarDepan::all();
        $gelarBelakang = GelarBelakang::all();
        
        return Inertia::render("Data/TambahAnggota", [
        "wilayahList" => $wilayahList,
        "kabupatenList" => $kabupatenList,
        "kecamatanList" => $kecamatanList,
        "desaList" => $desaList,
        "gelarDepan" => $gelarDepan,
        "gelarBelakang" => $gelarBelakang
        ]);
    }


    private function generateNIA($kodeCabang) {
        do {
            $randomNumber = str_pad(rand(0, 9999    ), 6, '0', STR_PAD_LEFT);
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
            'dusun' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:100',
            'keterangan' => 'nullable|string|max:255',
            'id_gelar_depan' => 'nullable|array',
            'id_gelar_depan.*' => 'exists:gelar_depan,id',
            'id_gelar_belakang' => 'nullable|array',
            'id_gelar_belakang.*' => 'exists:gelar_belakang,id',
            ]);

            $alamatData = $request->validate([
                'nama_jalan' => 'nullable|string|max:255',
                'rt' => 'nullable|string|max:255',
                'rw' => 'nullable|string|max:255',
                'gang' => "nullable|string|max:255",
                'no' => 'nullable|string|max:255',
            ]);

            DB::beginTransaction();
            $province = Wilayah::findOrFail($validated['id_wilayah']);
            $kodeCabang = $province->kode_cabang ?? "C-00";
            $nia = $this->generateNIA($kodeCabang);
            $anggota = new Anggota();
            $anggota->fill($validated);
            $anggota->nia = $nia;
            $anggota->nama_jalan = $alamatData["nama_jalan"];
            $anggota->rt = $alamatData["rt"];
            $anggota->rw = $alamatData["rw"];
            $anggota->gang = $alamatData["gang"];
            $anggota->no = $alamatData["no"];
            $anggota->save();


            if(!empty($validated['id_gelar_depan'])) {
                $anggota->gelarDepan()->sync($validated['id_gelar_depan']);

            }
            if(!empty($validated['id_gelar_belakang'])) {
                $anggota->gelarBelakang()->sync($validated['id_gelar_belakang']);
            }

            DB::commit();
            return redirect()->route("dashboard")->with("success", "Anggota Berhasil Ditambahkan");
            
    }
    
    public function edit( $id) {
        $wilayahList = Wilayah::all();
        $kabupatenList = Kabupaten::all();
        $kecamatanList = Kecamatan::all();
        $desaList = DesaKelurahan::all();
        $gelarDepan = GelarDepan::all();
        $gelarBelakang = GelarBelakang::all();
        $dataAnggota = Anggota::with(['wilayah', 'kabupaten','kecamatan','desaKelurahan', 'gelarDepan', 'gelarBelakang'])->findOrFail($id);
        return Inertia::render("Data/UpdateAnggota", [
            "anggota" => $dataAnggota,
            "wilayahList" => $wilayahList,
            "kabupatenList" => $kabupatenList,
            "kecamatanList" => $kecamatanList,
            "desaList" => $desaList,
            "gelarDepan" => $gelarDepan,
            "gelarBelakang" => $gelarBelakang
        ]);
    }

    public function update(Request $request, $id) {
             $validated = $request->validate([
            'name' => 'required|string|max:255',
            'id_wilayah' => 'required|exists:wilayah,id',
            'id_kabupaten' => 'required|exists:kabupaten,id',
            'id_kecamatan' => 'required|exists:kecamatan,id',
            'id_desa_kelurahan' => 'nullable|exists:desa_kelurahan,id',
            'dusun' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:100',
            'keterangan' => 'nullable|string|max:255',
            'id_gelar_depan' => 'nullable|array',
            'id_gelar_depan.*' => 'exists:gelar_depan,id',
            'id_gelar_belakang' => 'nullable|array',
            'id_gelar_belakang.*' => 'exists:gelar_belakang,id',
            ]);

            $alamatData = $request->validate([
                'nama_jalan' => 'nullable|string|max:255',
                'rt' => 'nullable|string|max:255',
                'rw' => 'nullable|string|max:255',
                'gang' => "nullable|string|max:255",
                'no' => 'nullable|string|max:255',
            ]);
        try {
            DB::beginTransaction();
            $anggota = Anggota::findOrFail($id);
            $anggota->fill($validated);
            $anggota->nama_jalan = $alamatData["nama_jalan"];
            $anggota->rt = $alamatData["rt"];
            $anggota->rw = $alamatData["rw"];
            $anggota->gang = $alamatData["gang"];
            $anggota->no = $alamatData["no"];
            $anggota->save();

            if(!empty($validated['id_gelar_depan'])) {
            $anggota->gelarDepan()->sync($validated['id_gelar_depan']);

            }
            if(!empty($validated['id_gelar_belakang'])) {
            $anggota->gelarBelakang()->sync($validated['id_gelar_belakang']);
            }
            DB::commit();
        }catch(Exception $e) {
            DB::rollBack();
        return redirect()->route("dashboard")->withErrors(['message' => $e->getMessage()]);

        }
        return redirect()->route("dashboard")->with("success", "Anggota Berhasil Diperbarui");
        
    }

    public function delete($id) {
        $anggota = Anggota::findOrFail($id);
        if(isset($anggota->gelarDepan)) {
            $anggota->gelarDepan()->detach();
        }

        if(isset($anggota->gelarBelakang)) {
            $anggota->gelarBelakang()->detach();
        }
        $anggota->delete();
        return redirect()->route('dashboard')->with('status', "Data anggota berhasil dihapus");
    }
}
