import Navbar from "@/Components/Navbar";

export default function AuthenticatedLayout({ children }) {
    return (
        <div className="bg-green-900">
            {" "}
            <Navbar></Navbar>
            {children}
        </div>
    );
}
