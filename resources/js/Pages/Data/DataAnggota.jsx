import Button from "@/Components/Button";
import Modal from "@/Components/Modal";
import NavLink from "@/Components/NavLink";
import { router } from "@inertiajs/react";

import { Edit, Edit2, Trash } from "lucide-react";

export default function DataAnggota({ user, dataAnggota }) {
    const handleDelete = (id) => {
        router.delete(route("anggota.delete", id), {
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
                    <NavLink className="btn" href={route("anggota.tambah")}>
                        Tambah Anggota
                    </NavLink>
                </section>
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>Nama</th>
                        <th>Nomor Induk Anggota</th>
                        <th>Provinsi</th>
                        <th>Kabupaten</th>
                        <th>Kecamatan</th>
                        <th>Desa / Kelurahan</th>
                        <th>Detail Alamat</th>
                        <th>Status</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {dataAnggota.data.map((data, index) => (
                        <tr key={data.id}>
                            <td>{index + 1}</td>
                            <td>
                                {data.gelar_depan
                                    .filter(
                                        (gd) => gd.pivot.anggota_id === data.id
                                    )
                                    .map((gd, idx) => (
                                        <span key={idx}>{gd.nama} </span>
                                    ))}
                                {data.name}
                                <span> </span>
                                {data.gelar_belakang
                                    .filter(
                                        (gb) => gb.pivot.anggota_id === data.id
                                    )
                                    .map((gb, index) => (
                                        <span key={index}>{gb.nama}</span>
                                    ))}
                            </td>
                            <td>{data.nia}</td>
                            <td>{data.wilayah?.nama_provinsi || "-"}</td>
                            <td>{data.kabupaten?.nama_kabupaten || "-"}</td>
                            <td>{data.kecamatan?.nama_kecamatan || "-"}</td>
                            <td>{data.desa_kelurahan?.nama || "-"}</td>
                            <td>
                                {data.dusun && <div>Dusun {data.dusun},</div>}

                                <div>
                                    {[
                                        data.rt && `RT ${data.rt}`,
                                        data.rw && `RW ${data.rw}`,
                                        data.gang && `Gg. ${data.gang}`,
                                        data.no && `No. ${data.no}`,
                                    ]
                                        .filter(Boolean)
                                        .join(", ")}
                                </div>

                                {data.nama_jalan && (
                                    <div>{data.nama_jalan}</div>
                                )}
                            </td>

                            <td>{data.status}</td>
                            <td>{data.keterangan || "-"}</td>

                            {user.status === "pusat" && (
                                <td className="flex gap-2">
                                    <NavLink
                                        href={route("anggota.update", {
                                            id: data.id,
                                        })}
                                        className="btn"
                                    >
                                        <Edit />
                                    </NavLink>
                                    <Modal
                                        id={`modal-delete-${data.id}`}
                                        text={<Trash />}
                                    >
                                        <div className="flex flex-col gap-4">
                                            <h2 className="text-xl font-bold">
                                                Konfirmasi Hapus
                                            </h2>
                                            <p>
                                                Yakin ingin menghapus anggota
                                                dengan NIA{" "}
                                                <strong>{data.nia}</strong>?
                                            </p>
                                            <button
                                                className="btn bg-red-500"
                                                onClick={() =>
                                                    handleDelete(data.id)
                                                }
                                            >
                                                <Trash /> Hapus
                                            </button>
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
