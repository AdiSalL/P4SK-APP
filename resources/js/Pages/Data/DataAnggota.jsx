import Button from "@/Components/Button";
import NavLink from "@/Components/NavLink";

export default function DataAnggota({ user }) {
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
                        Tambah Anggota
                    </NavLink>
                </section>
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>NIA</th>
                        <th>Provinsi</th>
                        <th>Kabupaten</th>
                        <th>Kecamatan</th>
                        <th>Desa / Kelurahan</th>
                        <th>RT/RW/Jalan</th>
                        <th>Status</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {dataCabang.data.map((cabang, index) => (
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
                                    >
                                        <div className="flex flex-col justify-end gap-2 text-2xl">
                                            <h2 className="font-semibold">
                                                Konfirmasi Hapus
                                            </h2>
                                            <p className="text-xl">
                                                Apakah Anda yakin ingin
                                                menghapus data ini? Kode Cabang{" "}
                                                {cabang.kode_cabang}
                                            </p>

                                            <button
                                                className="btn bg-red-500"
                                                onClick={() =>
                                                    handleDelete(cabang.id)
                                                }
                                            >
                                                <Trash></Trash>Hapus
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
