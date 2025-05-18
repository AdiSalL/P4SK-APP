import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import NavLink from "@/Components/NavLink";
import Toast from "@/Components/Toast";
import GuestLayout from "@/Layouts/GuestLayout";
import { Button } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Welcome({ user, status, cabang, ancab }) {
    const { data, setData, post, processing, errors } = useForm({
        status: "pusat",
        cabang: "",
        ancab: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        await post("/login", {
            onSuccess: () => {
                document.getElementById("modal-1").close();
            },
            onError: () => {
                document.getElementById("modal-1").close();
            },
        });
    };

    return (
        <GuestLayout>
            <div className="max-h-svh h-svh w-full flex flex-col">
                <div className="text-white text-center text-2xl pt-10 font-bold">
                    Marhaban
                </div>
                {status && <Toast message={status} />}
                {errors.status && <Toast message={errors.status}></Toast>}
                {user && <NavLink href={route("dashboard")}>Dashboard</NavLink>}
                {!user && (
                    <Modal id="modal-1" text={"Masuk Ke Akun Pengurus"}>
                        <div>
                            <h3 className="font-bold text-lg ">
                                Masuk Ke Akun Pengurus
                            </h3>

                            <p className="py-4">
                                Masukkan Pengurus Bagian Dan Password
                            </p>
                            <form onSubmit={handleLogin}>
                                <select
                                    className="select"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option
                                        disabled={true}
                                        defaultValue={"Pengurus Bagian"}
                                    >
                                        Pengurus Bagian
                                    </option>
                                    <option value="pusat">
                                        Pengurus Pusat
                                    </option>
                                    <option value="cabang">
                                        Pengurus Cabang
                                    </option>
                                    <option value="ancab">
                                        Pengurus Ancab
                                    </option>
                                </select>
                                {data.status === "cabang" && (
                                    <select
                                        className="select"
                                        value={data.cabang}
                                        onChange={(e) =>
                                            setData("cabang", e.target.value)
                                        }
                                    >
                                        <option disabled value="">
                                            Berasal Dari Cabang
                                        </option>
                                        {cabang.map((element) => (
                                            <option
                                                key={element.id}
                                                value={element.id}
                                            >
                                                {element.nama_kabupaten}
                                            </option>
                                        ))}
                                    </select>
                                )}

                                {data.status === "ancab" && (
                                    <>
                                        <select
                                            required
                                            className="select"
                                            value={data.cabang}
                                            onChange={(e) =>
                                                setData(
                                                    "cabang",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option disabled value="">
                                                Berasal Dari Cabang
                                            </option>
                                            {cabang.map((element) => (
                                                <option
                                                    key={element.id}
                                                    value={element.id}
                                                >
                                                    {element.nama_kabupaten}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            className="select"
                                            value={data.ancab}
                                            onChange={(e) =>
                                                setData("ancab", e.target.value)
                                            }
                                        >
                                            <option disabled value="">
                                                Berasal Dari Anak Cabang
                                            </option>
                                            {ancab
                                                .filter(
                                                    (k) =>
                                                        k.id_kabupaten ==
                                                        data.cabang
                                                ) // only show ancab based on selected cabang
                                                .map((element) => (
                                                    <option
                                                        key={element.id}
                                                        value={element.id}
                                                    >
                                                        {element.nama_kecamatan}
                                                    </option>
                                                ))}
                                        </select>
                                    </>
                                )}

                                <label className="input validator">
                                    <svg
                                        className="h-[1em] opacity-50"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                            <circle
                                                cx="16.5"
                                                cy="7.5"
                                                r=".5"
                                                fill="currentColor"
                                            ></circle>
                                        </g>
                                    </svg>
                                    <input
                                        type="password"
                                        required
                                        placeholder="Password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                </label>
                                <Button
                                    type="submit"
                                    className={"btn"}
                                    disabled={processing}
                                >
                                    {processing ? "Memproses.." : "Login"}
                                </Button>
                            </form>
                        </div>
                    </Modal>
                )}
            </div>
        </GuestLayout>
    );
}
