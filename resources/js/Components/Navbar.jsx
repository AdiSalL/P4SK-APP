import NavLink from "@/Components/NavLink";
import Button from "./Button";
import { Link, useForm } from "@inertiajs/react";

export default function Navbar({ user }) {
    const { post } = useForm();
    console.log(!user != null);
    function handleLogout() {
        post(route("logout"));
    }
    return (
        <div className="navbar bg-green-600 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <NavLink href="/" className="btn btn-ghost text-xl">
                    P4SK
                </NavLink>
            </div>

            <div className="navbar-end">
                {user == null ? (
                    <div></div>
                ) : (
                    <div className="flex gap-2">
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${
                                            user.name || "User"
                                        }`}
                                        alt={user.status}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
                            >
                                <li>
                                    <a onClick={() => alert("Hello Profile")}>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => alert("Hello Settings")}>
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a onClick={handleLogout}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
