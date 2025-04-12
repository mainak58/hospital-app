import { checkRole } from "@/app/utils/roles";
import React from "react";
import AdminNavBar from "./AdminNavBar";
import Navbar from "./Navbar";

async function NavbarCheck() {
    const isAdmin = await checkRole("admin");

    return <div>{isAdmin ? <AdminNavBar /> : <Navbar />}</div>;
}

export default NavbarCheck;
