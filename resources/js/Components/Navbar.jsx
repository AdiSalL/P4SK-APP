import NavLink from "@/Components/NavLink";
import { Button } from "@headlessui/react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <div className="navbar bg-green-600 shadow-sm sticky top-0">
            <div className="navbar-start">
                <NavLink href="/" className="btn btn-ghost text-xl">
                    P4SK
                </NavLink>
            </div>

            <div className="navbar-end"></div>
        </div>
    );
}
