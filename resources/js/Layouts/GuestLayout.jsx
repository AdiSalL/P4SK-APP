import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function GuestLayout({ children, title }) {
    return (
        <>
            <Navbar></Navbar>
            <Head title={title ? title : "P4SK Website"}></Head>
            <div className="flex min-h-screen bg-green-900 flex-col pt-6 sm:pt-0">
                {children}
            </div>
        </>
    );
}
