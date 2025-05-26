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

export default function Dashboard({ user, dataCabang, dataAnggota }) {
    const [page, setPage] = useState(() => {
        const storedValue = localStorage.getItem("savedPage");
        return storedValue ? JSON.parse(storedValue) : "identitasCabang";
    });

    useEffect(() => {
        localStorage.setItem("savedPage", JSON.stringify(page));
    }, [page]);

    const changePage = (newPage) => {
        setPage(newPage);
    };
    return (
        <AuthenticatedLayout user={user} title={"Dasboard"}>
            <div className="-z-10 h-screen w-full">
                <div>
                    <NavLink href="/">Home</NavLink>
                    <Button
                        disabled={page === "identitasCabang"}
                        onClick={() => changePage("identitasCabang")}
                        text="Identitas Cabang"
                    ></Button>
                    <Button
                        disabled={page === "dataAnggota"}
                        text="Data anggota"
                        onClick={() => changePage("dataAnggota")}
                    ></Button>
                    <Button
                        disabled={page === "dataLembaga"}
                        text="Data lembaga"
                        onClick={() => changePage("dataLembaga")}
                    ></Button>
                    {user.status == "pusat" && (
                        <>
                            {" "}
                            <Button
                                disabled={page === "tambahAnggota"}
                                text="Tambah anggota"
                                onClick={() => changePage("tambahAnggota")}
                            ></Button>
                            <Button
                                disabled={page === "tambahLembaga"}
                                text="Tambah lembaga"
                                onClick={() => changePage("tambahLembaga")}
                            ></Button>
                        </>
                    )}
                </div>
                <div className="overflow-x-auto rounded-box border border-green-800 ">
                    {page == "identitasCabang" && (
                        <IdentitasCabang
                            user={user}
                            dataCabang={dataCabang}
                        ></IdentitasCabang>
                    )}
                    {page == "dataAnggota" && (
                        <DataAnggota
                            user={user}
                            dataAnggota={dataAnggota}
                        ></DataAnggota>
                    )}
                    {page == "dataLembaga" && <DataLembaga></DataLembaga>}
                    {page == "tambahAnggota" && <TambahAnggota></TambahAnggota>}
                    {page == "tambahLembaga" && <TambahLembaga></TambahLembaga>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
