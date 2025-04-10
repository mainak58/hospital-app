import Link from "next/link";
import React from "react";

function page() {
    return (
        <>
            <Link href={"/admin/adddoctor"}>Add Doctor</Link>
            <Link href={"/admin/doctor"}>Doctor list</Link>
            <Link href={"/admin/patient"}>Patient</Link>
        </>
    );
}

export default page;
