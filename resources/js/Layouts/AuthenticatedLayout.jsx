import Navbar from "@/Components/Navbar";

export default function AuthenticatedLayout({ children, user = "" }) {
    return (
        <>
            <Navbar user={user}></Navbar>
            <div className="bg-green-900 min-h-screen -z-10">{children}</div>
        </>
    );
}
