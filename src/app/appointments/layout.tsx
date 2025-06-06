import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="pt-20 px-4">{children}</main>
            <div className="pt-39">
                <FooterSection />
            </div>
        </>
    );
}
