import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center pt-1 text-white text-sm font-medium leading-5 transition duration-150 ease-in-out outline-none " +
                (active
                    ? "btn bg-green-800 text-white opacity-100"
                    : "btn bg-green-800 text-white opacity-90") +
                className
            }
        >
            {children}
        </Link>
    );
}
