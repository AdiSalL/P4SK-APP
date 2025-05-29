import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { useForm } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { ArrowBigLeft, PlusIcon } from "lucide-react";
import Select from "react-select";
export default function UpdateAnggota({
    user,
    wilayahList,
    kabupatenList,
    kecamatanList,
    desaList,
    gelarDepan,
    gelarBelakang,
    dataAnggota,
}) {
    const { data, setData, post, processing, errors } = useForm({
        name: dataAnggota.nama || "",
        nia: dataAnggota.nia || "",
        id_wilayah: dataAnggota.id_wilayah || "",
        id_kabupaten: dataAnggota.id_kabupaten || "",
        id_kecamatan: dataAnggota.id_kecamatan || "",
        id_desa_kelurahan: dataAnggota.id_desa_kelurahan || "",
        rt: dataAnggota.rt || "",
        rw: dataAnggota.rw || "",
        nama_jalan: "Jln." + (dataAnggota.nama_jalan || ""),
        dusun: dataAnggota.dusun || "",
        status: dataAnggota.status || "",
        keterangan: dataAnggota.keterangan || "",
        id_gelar_depan: Array.isArray(dataAnggota.id_gelar_depan)
            ? dataAnggota.id_gelar_depan
            : dataAnggota.id_gelar_depan
            ? [dataAnggota.id_gelar_depan]
            : [],
        id_gelar_belakang: Array.isArray(dataAnggota.id_gelar_belakang)
            ? dataAnggota.id_gelar_belakang
            : dataAnggota.id_gelar_belakang
            ? [dataAnggota.id_gelar_belakang]
            : [],
    });

    // To show the selected options in react-select, use the value prop:
    // For Gelar Depan:
    // value={gelarDepanData.filter(opt => data.id_gelar_depan.includes(opt.value))}
    // For Gelar Belakang:
    // value={gelarBelakangData.filter(opt => data.id_gelar_belakang.includes(opt.value))}
    // This is already implemented in your Select components.

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("anggota.tambah.data"));
    };
    const gelarDepanData = gelarDepan.map((item) => ({
        value: item.id,
        label: item.nama,
    }));

    const gelarBelakangData = gelarBelakang.map((item) => ({
        value: item.id,
        label: item.nama,
    }));
    return (
        <AuthenticatedLayout user={user} title={"Tambah Anggota"}>
            <main className="max-w-4xl mx-auto p-6 space-y-4">
                <section className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Tambah Data Anggota</h1>
                    <p>pastikan untuk mengisi data secara berurutan</p>
                </section>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                        <TextInput
                            titleInput="Nama Lengkap"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            error={errors.name}
                            className="w-full"
                            required={true}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block font-medium">
                                Gelar Depan
                            </label>
                            <Select
                                isMulti
                                options={gelarDepanData}
                                value={gelarDepanData.filter((opt) =>
                                    data.id_gelar_depan.includes(opt.value)
                                )}
                                onChange={(selectedOptions) => {
                                    const values = selectedOptions.map(
                                        (opt) => opt.value
                                    );
                                    setData("id_gelar_depan", values);
                                }}
                                className="basic-multi-select text-black"
                                placeholder="Pilih Gelar Depan"
                            />
                            {errors.id_gelar_depan && (
                                <div className="text-red-500 text-sm">
                                    {errors.id_gelar_depan}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium">
                                Gelar Belakang
                            </label>
                            <Select
                                isMulti
                                options={gelarBelakangData}
                                value={gelarBelakangData.filter((opt) =>
                                    data.id_gelar_belakang.includes(opt.value)
                                )}
                                onChange={(selectedOptions) => {
                                    const values = selectedOptions.map(
                                        (opt) => opt.value
                                    );
                                    setData("id_gelar_belakang", values);
                                }}
                                className="basic-multi-select text-black"
                                placeholder="Pilih Gelar Depan"
                            />
                            {errors.id_gelar_depan && (
                                <div className="text-red-500 text-sm">
                                    {errors.id_gelar_depan}
                                </div>
                            )}
                        </div>
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
                                {kabupatenList
                                    .filter(
                                        (p) => p.id_provinsi == data.id_wilayah
                                    )
                                    .map((item) => (
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
                                {kecamatanList
                                    .filter(
                                        (k) =>
                                            k.id_kabupaten == data.id_kabupaten
                                    )
                                    .map((item) => (
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
                                {desaList
                                    .filter(
                                        (d) =>
                                            d.id_kecamatan == data.id_kecamatan
                                    )
                                    .map((item) => (
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
                            type="number"
                            onChange={(e) => setData("rt", e.target.value)}
                            error={errors.rt}
                            className="w-full"
                        />
                        <TextInput
                            titleInput="RW"
                            value={data.rw}
                            type="number"
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
                        <label className="block font-medium">
                            <p>Status</p>
                        </label>
                        <select
                            className="select select-bordered w-full"
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                            required={true}
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
