import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default async function AdminNavBar() {
    const { userId } = await auth();

    if (!userId) {
        return redirect("/sign-in");
    }

    // Implement your checkRole logic here if needed
    // const isAdmin = await checkRole("admin");
    // if (!isAdmin) {
    //   return redirect("/unauthorized");
    // }

    return (
        <nav className="bg-white border-b border-gray-200 shadow-md">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300"
                >
                    HealthCare+
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <NavItem href="/admin/adddoctor" label="Add Doctor" />
                    <NavItem href="/admin/doctor" label="Doctors" />
                    <NavItem href="/admin/patient" label="Patients" />
                    <SignedIn>
                        <div className="ml-4">
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
}

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
            <span>{label}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
    );
}
