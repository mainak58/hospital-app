import Navbar from "@/components/Navbar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}

export default Layout;
