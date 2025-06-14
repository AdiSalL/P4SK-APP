<?php

namespace App\Http\Controllers;

use App\Models\DesaKelurahan;
use App\Models\Kabupaten;
use App\Models\Kecamatan;
use App\Models\Wilayah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DataLembagaController extends Controller
{
    //
    public function create() {
        $wilayahList = Wilayah::all();
        $kabupatenList = Kabupaten::all();
        $kecamatanList = Kecamatan::all();
        $desaList = DesaKelurahan::all();

        return Inertia::render("Data/TambahLembaga", [
            "provinsi" => $wilayahList,
            "kabupaten" => $kabupatenList,
            "kecamatan" => $kecamatanList,
            "desa" => $desaList
        ]);
    }

    public function store(Request $request) {
        dd($request);
    }

    public function edit() {

    }

    public function update(Request $request, $id) {

    }

    public function destroy($id) {

    }

}
