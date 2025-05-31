import Button from "@/Components/Button";
import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import IdentitasCabang from "./Data/IdentitasCabang";
import { useEffect, useState } from "react";
import DataAnggota from "./Data/DataAnggota";
import DataLembaga from "./Data/DataLembaga";
import TambahAnggota from "./Data/TambahAnggota";
import TambahLembaga from "./Data/TambahLembaga";

export default function Dashboard({
    user,
    dataCabang,
    dataAnggota,
    dataLembaga,
}) {
    const [page, setPage] = useState(() => {
        const storedValue = localStorage.getItem("savedPage");
        return storedValue ? JSON.parse(storedValue) : "Identitas Cabang";
    });

    useEffect(() => {
        localStorage.setItem("savedPage", JSON.stringify(page));
    }, [page]);

    const changePage = (newPage) => {
        setPage(newPage);
    };
    return (
        <AuthenticatedLayout user={user} title={`Dashboard - ${page}`}>
            <div className="-z-10 h-screen w-full">
                <div>
                    <NavLink href="/">Home</NavLink>
                    <Button
                        disabled={page === "Identitas Cabang"}
                        onClick={() => changePage("Identitas Cabang")}
                        text="Identitas Cabang"
                    ></Button>
                    <Button
                        disabled={page === "Data Anggota"}
                        text="Data anggota"
                        onClick={() => changePage("Data Anggota")}
                    ></Button>
                    <Button
                        disabled={page === "Data Lembaga"}
                        text="Data lembaga"
                        onClick={() => changePage("Data Lembaga")}
                    ></Button>
                    {user.status == "pusat" && (
                        <>
                            {" "}
                            <NavLink
                                href={route("anggota.tambah")}
                                text="Tambah anggota"
                            >
                                Tambah Anggota
                            </NavLink>
                            <Button
                                disabled={page === "tambahLembaga"}
                                text="Tambah lembaga"
                            ></Button>
                        </>
                    )}
                </div>
                <div className="overflow-x-auto rounded-box border border-green-800 ">
                    {page == "Identitas Cabang" && (
                        <IdentitasCabang
                            user={user}
                            dataCabang={dataCabang}
                        ></IdentitasCabang>
                    )}
                    {page == "Data Anggota" && (
                        <DataAnggota
                            user={user}
                            dataAnggota={dataAnggota}
                        ></DataAnggota>
                    )}
                    {page == "Data Lembaga" && (
                        <DataLembaga user={user}></DataLembaga>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
