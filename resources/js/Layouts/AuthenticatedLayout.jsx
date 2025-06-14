import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function AuthenticatedLayout({ children, user = "", title }) {
    return (
        <>
            <Navbar user={user}></Navbar>
            <Head title={title ? title : "P4SK Website"}></Head>
            <div className="bg-green-900  w-full min-h-screen max-w-screen -z-10">
                {children}
            </div>
        </>
    );
}
