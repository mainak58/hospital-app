import FooterSection from "@/components/FooterSection";
import NavbarCheck from "@/components/NavbarCheck";
import React from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <NavbarCheck />
            <main>{children}</main>
            <FooterSection />
        </main>
    );
}

export default Layout;
