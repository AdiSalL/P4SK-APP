import Button from "@/Components/Button";
import Modal from "@/Components/Modal";
import NavLink from "@/Components/NavLink";
import { router } from "@inertiajs/react";
import { Edit, Trash } from "lucide-react";

export default function DataLembaga({ user, dataLembaga }) {
    console.log(dataLembaga);
    const handleDelete = (id) => {
        router.delete(route("lembaga.delete", id), {
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
                <section className="flex gap-2 justify-end mb-4">
                    <Button text="Download Template Excel" />
                    <Button text="Import Data Excel" />
                    <Button text="Export Data Excel" />
                    <NavLink className="btn" href={route("lembaga.tambah")}>
                        Tambah Lembaga
                    </NavLink>
                </section>
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Lembaga</th>
                        <th>Provinsi</th>
                        <th>Kabupaten</th>
                        <th>Kelurahan / Desa</th>
                        <th>No. Telepon</th>
                        <th>Email</th>
                        <th>Jenis Lembaga</th>
                        <th>Format Lembaga</th>
                        <th>Legalitas Pesantren</th>
                        <th>Legalitas Formal</th>
                        <th>Jumlah Santri Putra</th>
                        <th>Jumlah Santri Putri</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {dataLembaga.data.map((lembaga, index) => (
                        <tr key={lembaga.id}>
                            <td>{index + 1}</td>
                            <td>{lembaga.nama_lembaga}</td>
                            <td>{lembaga.provinsi?.nama_provinsi || "-"}</td>
                            <td>{lembaga.kabupaten?.nama_kabupaten || "-"}</td>
                            <td>{lembaga.desa_kelurahan?.nama || "-"}</td>
                            <td>{lembaga.no_telp || "-"}</td>
                            <td>{lembaga.email || "-"}</td>
                            <td>{lembaga.jenis_lembaga || "-"}</td>
                            <td>{lembaga.format_lembaga || "-"}</td>
                            <td>{lembaga.legalitas_pesantren || "-"}</td>
                            <td>{lembaga.legalitas_formal || "-"}</td>
                            <td>{lembaga.jml_santri_putra || 0}</td>
                            <td>{lembaga.jml_santri_putri || 0}</td>

                            {user.status === "pusat" && (
                                <td className="flex gap-2">
                                    <NavLink
                                        href={route("lembaga.edit", {
                                            id: lembaga.id,
                                        })}
                                        className="btn"
                                    >
                                        <Edit />
                                    </NavLink>
                                    <Modal
                                        id={`modal-delete-${lembaga.id}`}
                                        text={<Trash />}
                                    >
                                        <div className="flex flex-col gap-2 text-xl">
                                            <h2 className="font-bold">
                                                Konfirmasi Hapus
                                            </h2>
                                            <p>
                                                Yakin ingin menghapus Lembaga{" "}
                                                <strong>
                                                    {lembaga.nama_lembaga}
                                                </strong>
                                                ?
                                            </p>
                                            <button
                                                className="btn bg-red-600 text-white"
                                                onClick={() =>
                                                    handleDelete(lembaga.id)
                                                }
                                            >
                                                <Trash /> Hapus
                                            </button>
                                        </div>
                                    </Modal>
                                </td>
                            )}
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </main>
    );
}
