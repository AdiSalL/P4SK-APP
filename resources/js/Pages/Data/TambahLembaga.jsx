import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import Select from "react-select";

export default function TambahLembaga({
    user,
    provinsi,
    kabupaten,
    kecamatan,
    desa,
}) {
    const { data, setData, post, processing, errors } = useForm({
        nama_lembaga: "",
        id_provinsi: "",
        id_kabupaten: "",
        id_kecamatan: "",
        id_desa_kelurahan: "",
        telepon: "",
        email: "",
        jenis: "",
        format: "",
        legalitas_pesantren: "",
        jumlah_santri_putra: "",
        jumlah_santri_putri: "",
    });
    const handleSubmit = () => {};

    const dataProvinsi = provinsi.map((item) => ({
        value: item.id,
        label: item.nama_provinsi,
    }));

    const dataKabupaten = kabupaten.map((item) => ({
        value: item.id,
        label: item.nama_kabupaten,
    }));

    return (
        <AuthenticatedLayout user={user} title={"Tambah Lembaga"}>
            <main className="max-w-4xl mx-auto p-6 space-y-4">
                <section className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Tambah Data Lembaga</h1>
                </section>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                        <TextInput
                            titleInput="Nama Lembaga"
                            value={data.nama_lembaga}
                            onChange={(e) =>
                                setData("nama_lembaga", e.target.value)
                            }
                            error={errors.nama_lembaga}
                            required={true}
                            className="w-full"
                            placeholder="Pastikan isi dengan benar"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block font-medium">
                                Provinsi
                            </label>
                            <Select
                                className="text-black"
                                options={dataProvinsi}
                                value={dataProvinsi.find(
                                    (dataOpt) =>
                                        dataOpt.value == data.id_provinsi
                                )}
                                defaultValue={""}
                                isLoading={processing}
                                isClearable={true}
                                isSearchable={true}
                                placeholder={"Pilih Provinsi"}
                                onChange={(selected) =>
                                    setData("id_provinsi", selected.value)
                                }
                            ></Select>

                            {errors.id_wilayah && (
                                <div className="text-red-500 text-sm">
                                    {errors.id_wilayah}
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </main>
        </AuthenticatedLayout>
    );
}
