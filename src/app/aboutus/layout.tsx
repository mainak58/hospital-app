import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <FooterSection />
        </>
    );
}

export default Layout;
