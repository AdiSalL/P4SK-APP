import Navbar from "@/Components/Navbar";

export default function GuestLayout({ children }) {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex min-h-screen bg-green-900 flex-col pt-6 sm:pt-0">
                {children}
            </div>
        </>
    );
}
