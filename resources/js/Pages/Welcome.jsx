import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import NavLink from "@/Components/NavLink";
import GuestLayout from "@/Layouts/GuestLayout";
import { Button } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Welcome({ message, user }) {
    console.log(user);
    const { data, setData, post, processing, errors } = useForm({
        status: "pusat",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        await post("/login", {
            onSuccess: () => {
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
                                        Pengurus Ancab / Cabang
                                    </option>
                                </select>
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
                                    Login
                                </Button>
                            </form>
                        </div>
                    </Modal>
                )}
            </div>
        </GuestLayout>
    );
}
