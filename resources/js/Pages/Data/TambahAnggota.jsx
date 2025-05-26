import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { ArrowBigLeft } from "lucide-react";

export default function TambahAnggota({
    user,
    wilayahList,
    kabupatenList,
    kecamatanList,
    desaList,
}) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        nia: "",
        id_wilayah: "",
        id_kabupaten: "",
        id_kecamatan: "",
        id_desa_kelurahan: "",
        rt: "",
        rw: "",
        nama_jalan: "",
        dusun: "",
        status: "",
        keterangan: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("anggota.tambah.data"));
    };

    return (
        <AuthenticatedLayout user={user} title={"Tambah Anggota"}>
            <main className="max-w-4xl mx-auto p-6 space-y-4">
                <section className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Tambah Data Anggota</h1>
                </section>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                        <TextInput
                            titleInput="Nama Lengkap"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            error={errors.name}
                            className="w-full"
                        />
                        <TextInput
                            titleInput="NIA"
                            value={data.nia}
                            onChange={(e) => setData("nia", e.target.value)}
                            error={errors.nia}
                            className="w-full"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block font-medium">
                                Provinsi
                            </label>
                            <select
                                className="select select-bordered w-full"
                                value={data.id_wilayah}
                                onChange={(e) =>
                                    setData("id_wilayah", e.target.value)
                                }
                            >
                                <option value="">Pilih Provinsi</option>
                                {wilayahList.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nama_provinsi}
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
                            <label className="block font-medium">
                                Kabupaten
                            </label>
                            <select
                                className="select select-bordered w-full"
                                value={data.id_kabupaten}
                                onChange={(e) =>
                                    setData("id_kabupaten", e.target.value)
                                }
                            >
                                <option value="">Pilih Kabupaten</option>
                                {kabupatenList.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nama_kabupaten}
                                    </option>
                                ))}
                            </select>
                            {errors.id_kabupaten && (
                                <div className="text-red-500 text-sm">
                                    {errors.id_kabupaten}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block font-medium">
                                Kecamatan
                            </label>
                            <select
                                className="select select-bordered w-full"
                                value={data.id_kecamatan}
                                onChange={(e) =>
                                    setData("id_kecamatan", e.target.value)
                                }
                            >
                                <option value="">Pilih Kecamatan</option>
                                {kecamatanList.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nama_kecamatan}
                                    </option>
                                ))}
                            </select>
                            {errors.id_kecamatan && (
                                <div className="text-red-500 text-sm">
                                    {errors.id_kecamatan}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium">
                                Desa/Kelurahan
                            </label>
                            <select
                                className="select select-bordered w-full"
                                value={data.id_desa_kelurahan}
                                onChange={(e) =>
                                    setData("id_desa_kelurahan", e.target.value)
                                }
                            >
                                <option value="">Pilih Desa/Kelurahan</option>
                                {desaList.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nama}
                                    </option>
                                ))}
                            </select>
                            {errors.id_desa_kelurahan && (
                                <div className="text-red-500 text-sm">
                                    {errors.id_desa_kelurahan}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <TextInput
                            titleInput="RT"
                            value={data.rt}
                            onChange={(e) => setData("rt", e.target.value)}
                            error={errors.rt}
                            className="w-full"
                        />
                        <TextInput
                            titleInput="RW"
                            value={data.rw}
                            onChange={(e) => setData("rw", e.target.value)}
                            error={errors.rw}
                            className="w-full"
                        />
                    </div>

                    <TextInput
                        titleInput="Nama Jalan"
                        value={data.nama_jalan}
                        onChange={(e) => setData("nama_jalan", e.target.value)}
                        error={errors.nama_jalan}
                        className="w-full"
                    />

                    <TextInput
                        titleInput="Dusun"
                        value={data.dusun}
                        onChange={(e) => setData("dusun", e.target.value)}
                        error={errors.dusun}
                        className="w-full"
                    />

                    <div>
                        <label className="block font-medium">Status</label>
                        <select
                            className="select select-bordered w-full"
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="" disabled={true}>
                                Pilih Status
                            </option>
                            <option value={"aktif"}>Aktif</option>
                            <option value={"tidak"}>Tidak Aktif</option>
                        </select>
                        {errors.status && (
                            <div className="text-red-500 text-sm">
                                {errors.status}
                            </div>
                        )}
                    </div>

                    <TextInput
                        titleInput="Keterangan"
                        value={data.keterangan}
                        onChange={(e) => setData("keterangan", e.target.value)}
                        error={errors.keterangan}
                        className="w-full"
                    />

                    <div className="flex justify-between flex-row-reverse">
                        <Button
                            type="submit"
                            disabled={processing}
                            text="Tambah Anggota"
                        />
                        <NavLink href="/dashboard">
                            <ArrowBigLeft /> Kembali
                        </NavLink>
                    </div>
                </form>
            </main>
        </AuthenticatedLayout>
    );
}
