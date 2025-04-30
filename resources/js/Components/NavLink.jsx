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
                "inline-flex items-center border-b-2 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active ? "btn btn-neutral" : "btn btn-neutral btn-outline") +
                className
            }
        >
            {children}
        </Link>
    );
}
