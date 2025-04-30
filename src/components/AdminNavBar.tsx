"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { UserButton, useUser, SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function AdminNavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-200 shadow-sm fixed w-full z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3 md:py-4">
                    <Link
                        href="/"
                        className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300"
                    >
                        HealthCare+
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium text-[16px]">
                        <NavItem href="/admin/adddoctor" label="Add Doctor" />
                        <NavItem href="/admin/doctor" label="Doctors" />
                        <NavItem href="/admin/patient" label="Patients" />
                        <SignedIn>
                            <div className="ml-6 flex items-center space-x-5">
                                <UserButton />
                            </div>
                        </SignedIn>
                    </nav>

                    <button
                        className="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden px-6 py-4 bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out transform">
                    <MobileNavItem
                        href="/admin/adddoctor"
                        label="Add Doctor"
                        setOpen={setMenuOpen}
                    />
                    <MobileNavItem
                        href="/admin/doctor"
                        label="Doctors"
                        setOpen={setMenuOpen}
                    />
                    <MobileNavItem
                        href="/admin/patient"
                        label="Patients"
                        setOpen={setMenuOpen}
                    />
                    <SignedIn>
                        <div className="mt-4 flex flex-col items-center space-y-4">
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </SignedIn>
                </div>
            )}
        </header>
    );
}

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} className="relative group transition">
            <span className="group-hover:text-blue-600 transition-colors duration-200">
                {label}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
    );
}

function MobileNavItem({
    href,
    label,
    setOpen,
}: {
    href: string;
    label: string;
    setOpen: (val: boolean) => void;
}) {
    return (
        <Link
            href={href}
            onClick={() => setOpen(false)}
            className="block py-3 px-3 text-lg text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium mb-1"
        >
            {label}
        </Link>
    );
}
