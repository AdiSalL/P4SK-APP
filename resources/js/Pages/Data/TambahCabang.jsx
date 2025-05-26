import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { ArrowBigLeft } from "lucide-react";

export default function TambahCabang({ user, wilayahList, kabupatenList }) {
    const { data, setData, post, processing, errors } = useForm({
        alamat_sekratariat: "",
        kode_cabang: "",
        tanggal_la: "",
        rois_dewan_penasihat: "",
        ketua_dewan_harian: "",
        sekrataris_umum: "",
        bendahara_umum: "",
        id_wilayah: "",
        id_kabupaten: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("cabang.tambah.data"));
    };

    return (
        <AuthenticatedLayout user={user} title={"Tambah Cabang"}>
            <main className="max-w-4xl mx-auto p-6 space-y-4">
                <section className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Tambah Data Cabang</h1>
                </section>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 w-full gap-2">
                        <TextInput
                            titleInput="Alamat Sekretariat"
                            value={data.alamat_sekratariat}
                            onChange={(e) =>
                                setData("alamat_sekratariat", e.target.value)
                            }
                            error={errors.alamat_sekratariat}
                            className="w-full"
                        />
                        <TextInput
                            titleInput="Kode Cabang"
                            value={data.kode_cabang}
                            onChange={(e) =>
                                setData("kode_cabang", e.target.value)
                            }
                            error={errors.kode_cabang}
                            className="w-full bg-green-50 text-black"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Tanggal LA</label>
                        <input
                            type="date"
                            value={data.tanggal_la}
                            onChange={(e) =>
                                setData("tanggal_la", e.target.value)
                            }
                            className="input input-bordered w-full bg-green-50 text-black"
                        />
                        {errors.tanggal_la && (
                            <div className="text-red-500 text-sm">
                                {errors.tanggal_la}
                            </div>
                        )}
                    </div>
                    <div
                        className="grid grid-cols-2 grid-rows-2 w-full gap-2
                    "
                    >
                        <TextInput
                            titleInput="Rois Dewan Penasihat"
                            value={data.rois_dewan_penasihat}
                            onChange={(e) =>
                                setData("rois_dewan_penasihat", e.target.value)
                            }
                            error={errors.rois_dewan_penasihat}
                            className="w-full"
                        />
                        <TextInput
                            titleInput="Ketua Dewan Harian"
                            value={data.ketua_dewan_harian}
                            onChange={(e) =>
                                setData("ketua_dewan_harian", e.target.value)
                            }
                            error={errors.ketua_dewan_harian}
                            className="w-full"
                        />
                        <TextInput
                            titleInput="Sekretaris Umum"
                            value={data.sekrataris_umum}
                            onChange={(e) =>
                                setData("sekrataris_umum", e.target.value)
                            }
                            error={errors.sekrataris_umum}
                            className="w-full"
                        />
                        <TextInput
                            titleInput="Bendahara Umum"
                            value={data.bendahara_umum}
                            onChange={(e) =>
                                setData("bendahara_umum", e.target.value)
                            }
                            error={errors.bendahara_umum}
                            className="w-full "
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Provinsi</label>
                        <select
                            className="select select-bordered w-full"
                            value={data.id_wilayah}
                            onChange={(e) =>
                                setData("id_wilayah", e.target.value)
                            }
                        >
                            <option value="" disabled={true}>
                                Pilih Provinsi
                            </option>
                            {wilayahList.map((wilayah) => (
                                <option key={wilayah.id} value={wilayah.id}>
                                    {wilayah.nama_provinsi}
                                </option>
                            ))}
                        </select>
                        {errors.id_wilayah && (
                            <div className="text-red-500 text-sm">
                                {errors.id_wilayah}
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block font-medium">Kabupaten</label>
                        <select
                            className="select select-bordered w-full"
                            value={data.id_kabupaten}
                            onChange={(e) =>
                                setData("id_kabupaten", e.target.value)
                            }
                        >
                            <option value="" disabled={true}>
                                Pilih Kabupaten
                            </option>
                            {kabupatenList.map((kab) => (
                                <option key={kab.id} value={kab.id}>
                                    {kab.nama_kabupaten}
                                </option>
                            ))}
                        </select>
                        {errors.id_kabupaten && (
                            <div className="text-red-500 text-sm">
                                {errors.id_kabupaten}
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between flex-row-reverse">
                        <Button
                            type="submit"
                            disabled={processing}
                            text="Tambah Cabang"
                        />
                        <NavLink href="/dashboard">
                            {" "}
                            <ArrowBigLeft></ArrowBigLeft> Kembali
                        </NavLink>
                    </div>
                </form>
            </main>
        </AuthenticatedLayout>
    );
}
