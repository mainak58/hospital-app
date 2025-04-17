"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useUser();
    const router = useRouter();

    return (
        <header className="bg-white shadow-sm fixed w-full z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3 md:py-4">
                    <Link
                        href="/"
                        className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-colors duration-300"
                    >
                        HealthCare+
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium text-[16px]">
                        <NavItem href="/" label="Home" />
                        <NavItem href="/appointments" label="Appointment" />
                        <NavItem href="/aboutus" label="About Us" />
                        <SignedOut>
                            <div className="flex items-center space-x-4 ml-6">
                                <SignInButton>
                                    <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md active:scale-95">
                                        Sign In
                                    </button>
                                </SignInButton>

                                <SignUpButton>
                                    <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer">
                                        Sign Up
                                    </button>
                                </SignUpButton>
                            </div>
                        </SignedOut>

                        <SignedIn>
                            <div className="ml-6 flex items-center space-x-5">
                                <button
                                    onClick={() =>
                                        router.push(
                                            `myappointments?id=${user?.id}`
                                        )
                                    }
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r text-black font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                                >
                                    My Appointments
                                </button>
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
                    <SignedOut>
                        <div className="flex flex-col space-y-3 mt-4">
                            <SignInButton>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="w-full px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 active:scale-95"
                                >
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 active:scale-95"
                                >
                                    Create Account
                                </button>
                            </SignUpButton>
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <div className="mt-4 flex flex-col items-center space-y-4">
                            <button
                                onClick={() => {
                                    router.push(
                                        `myappointments?id=${user?.id}`
                                    );
                                    setMenuOpen(false);
                                }}
                                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 active:scale-95"
                            >
                                My Appointments
                            </button>
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
