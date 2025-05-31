import Button from "@/Components/Button";
import Modal from "@/Components/Modal";
import NavLink from "@/Components/NavLink";
import { router } from "@inertiajs/react";
import { Edit, Trash, Trash2Icon } from "lucide-react";

export default function IdentitasCabang({ user, dataCabang }) {
    const handleDelete = (id) => {
        router.delete(route("cabang.delete", id), {
            onSuccess: () => {
                document.getElementById(`modal-delete-${id}`).close();
            },
        });
    };
    return (
        <main className="opacity-90">
            {user.status != "pusat" ? (
                ""
            ) : (
                <section className="flex gap-2  justify-end">
                    <Button text="Download Template Excel"></Button>
                    <Button text="Import Data Excel"></Button>
                    <Button text="Export Data Excel"></Button>
                    <NavLink className="btn" href={route("cabang.tambah")}>
                        Tambah Cabang
                    </NavLink>
                </section>
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Alamat sekretariat</th>
                        <th>Kode cabang</th>
                        <th>Tanggal Lahir</th>
                        <th>Rois Dewan Penasihat</th>
                        <th>Ketua Dewan Harian</th>
                        <th>Sekrataris Umum</th>
                        <th>Bendahara</th>
                        <th>Provinsi</th>
                        <th>Kabupaten</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCabang.data.map((cabang, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{cabang.alamat_sekratariat}</td>
                            <td>{cabang.kode_cabang}</td>
                            <td>{cabang.tanggal_la}</td>
                            <td>{cabang.rois_dewan_penasihat}</td>
                            <td>{cabang.ketua_dewan_harian}</td>
                            <td>{cabang.sekrataris_umum}</td>
                            <td>{cabang.bendahara_umum}</td>
                            <td>{cabang.wilayah.nama_provinsi}</td>
                            <td>{cabang.kabupaten.nama_kabupaten}</td>
                            {user.status != "pusat" ? (
                                ""
                            ) : (
                                <td className="flex gap-2">
                                    <NavLink
                                        href={route("cabang.edit", {
                                            id: cabang.id,
                                        })}
                                        className="btn"
                                    >
                                        <Edit></Edit>
                                    </NavLink>
                                    <Modal
                                        id={`modal-delete-${cabang.id}`}
                                        text={<Trash></Trash>}
                                        isDelete={true}
                                        onClick={() => handleDelete(cabang.id)}
                                    >
                                        <div className="flex flex-col justify-end gap-2 ">
                                            <h2 className="font-bold text-2xl">
                                                Konfirmasi Hapus
                                            </h2>
                                            <p className="">
                                                Apakah Anda yakin ingin
                                                menghapus data ini? Kode Cabang{" "}
                                                {cabang.kode_cabang}
                                            </p>
                                        </div>
                                    </Modal>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
