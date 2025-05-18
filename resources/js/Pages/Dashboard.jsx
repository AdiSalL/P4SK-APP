import Button from "@/Components/Button";
import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import IdentitasCabang from "./Data/IdentitasCabang";
import { useState } from "react";
import DataAnggota from "./Data/DataAnggota";
import DataLembaga from "./Data/DataLembaga";
import TambahAnggota from "./Data/TambahAnggota";
import TambahLembaga from "./Data/TambahLembaga";

export default function Dashboard({ user }) {
    const [page, setPage] = useState("identitasCabang");

    const changePage = (newPage) => {
        setPage(newPage);
    };
    return (
        <AuthenticatedLayout user={user}>
            <div className="-z-10">
                <div>
                    <NavLink href="/">Home</NavLink>
                    <Button
                        onClick={() => changePage("identitasCabang")}
                        text="Identitas Cabang"
                    ></Button>
                    <Button
                        text="Data anggota"
                        onClick={() => changePage("dataAnggota")}
                    ></Button>
                    <Button
                        text="Data lembaga"
                        onClick={() => changePage("dataLembaga")}
                    ></Button>
                    <Button
                        text="Tambah anggota"
                        onClick={() => changePage("TambahAnggota")}
                    ></Button>
                    <Button
                        text="Tambah lembaga"
                        onClick={() => changePage("TambahAnggota")}
                    ></Button>
                </div>
                <div className="overflow-x-auto rounded-box border border-green-800 ">
                    {page == "identitasCabang" && (
                        <IdentitasCabang></IdentitasCabang>
                    )}
                    {page == "dataAnggota" && <DataAnggota></DataAnggota>}
                    {page == "dataLembaga" && <DataLembaga></DataLembaga>}
                    {page == "TambahAnggota" && <TambahAnggota></TambahAnggota>}
                    {page == "TambahAnggota" && <TambahLembaga></TambahLembaga>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
