import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TambahLembaga(user) {
    const handleSubmit = () => {};
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
                            // value={}
                            // onChange={(e) => setData("name", e.target.value)}
                            // error={errors.name}
                            // required={true}
                            className="w-full"
                            placeholder="Pastikan isi dengan benar"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="block font-medium">
                                Provinsi
                            </label>
                            <select
                                className="select select-bordered w-full bg-white text-black"
                                // value={data.id_wilayah}
                                // onChange={(e) =>
                                //     setData("id_wilayah", e.target.value)
                                // }
                            >
                                <option value="">Pilih Provinsi</option>
                                {/* {wilayahList.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nama_provinsi}
                                    </option>
                                ))} */}
                            </select>
                            {/* {errors.id_wilayah && (
                                <div className="text-red-500 text-sm">
                                    {errors.id_wilayah}
                                </div>
                            )} */}
                        </div>
                    </div>
                </form>
            </main>
        </AuthenticatedLayout>
    );
}
