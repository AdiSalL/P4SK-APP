import Button from "@/Components/Button";
import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Dashboard({ user }) {
    return (
        <AuthenticatedLayout user={user}>
            <div className="-z-10">
                <div>
                    <NavLink href="/">Home</NavLink>
                    <Button text="Identitas Cabang"></Button>
                    <Button text="Data anggota"></Button>
                    <Button text="Data lembaga"></Button>
                    <Button text="Tambah anggota"></Button>
                    <Button text="Tambah lembaga"></Button>
                </div>
                <div className="overflow-x-auto rounded-box border border-green-800 ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Kode Cabang</th>
                                <th>Provinsi</th>
                                <th>Kabupaten</th>
                                <th>Kecamatan</th>
                                <th>Desa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
