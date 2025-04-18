import NavbarCheck from "@/components/NavbarCheck";
import React from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <NavbarCheck />
            <main className="pt-18">{children}</main>
        </main>
    );
}

export default Layout;
