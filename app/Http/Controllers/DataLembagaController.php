<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DataLembagaController extends Controller
{
    //
    public function create() {
        return Inertia::render("Data/TambahLembaga", [

        ]);
    }

    public function store(Request $request) {

    }

    public function edit() {

    }

    public function update(Request $request, $id) {

    }

    public function destroy($id) {

    }

}
