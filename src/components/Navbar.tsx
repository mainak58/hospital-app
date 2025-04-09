"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link
                        href="/"
                        className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
                    >
                        HealthCare+
                    </Link>

                    <nav className="hidden md:flex items-center space-x-10 text-gray-800 font-medium text-lg">
                        <NavItem href="/" label="Home" />
                        <NavItem href="/appointments" label="Appointment" />
                        <NavItem href="/aboutus" label="About Us" />
                        {/* <Link
                            href="/login"
                            className="ml-4 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Login
                        </Link> */}
                    </nav>

                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden px-4 pb-4 bg-white shadow-sm">
                    <MobileNavItem
                        href="/"
                        label="Home"
                        setOpen={setMenuOpen}
                    />
                    <MobileNavItem
                        href="/appointments"
                        label="Appointment"
                        setOpen={setMenuOpen}
                    />
                    <MobileNavItem
                        href="/aboutus"
                        label="About Us"
                        setOpen={setMenuOpen}
                    />
                    {/* <Link
                        href="/login"
                        onClick={() => setMenuOpen(false)}
                        className="block mt-2 px-4 py-2 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    >
                        Login
                    </Link> */}
                </div>
            )}
        </header>
    );
}

function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} className="relative group transition">
            <span>{label}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
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
            className="block py-2 text-lg text-gray-800 hover:text-blue-600 transition"
        >
            {label}
        </Link>
    );
}
