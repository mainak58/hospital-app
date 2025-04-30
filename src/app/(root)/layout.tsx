import NavbarCheck from "@/components/NavbarCheck";
import React from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <NavbarCheck />
            <main>{children}</main>
        </main>
    );
}

export default Layout;
