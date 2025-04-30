import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Button } from "@headlessui/react";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100 pt-6 sm:pt-0">
            <div>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <NavLink href="/" className="btn btn-ghost text-xl">
                            P4SK
                        </NavLink>
                    </div>

                    <div className="navbar-end"></div>
                </div>
            </div>

            <div className="mt-6 w-full overflow-hidden">{children}</div>
        </div>
    );
}
