import { checkRole } from "@/app/utils/roles";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

async function page() {
    const { userId, redirectToSignIn } = await auth();
    const user = await currentUser();


    if (!userId) return redirectToSignIn();
    const isAdmin = await checkRole("admin");
    if (isAdmin) {
        console.log("admin");
    }
    return (
        <>
            <h1>Hello , {userId} </h1>
            <h1> Hello, {user?.firstName} </h1>

            <h1></h1>
        </>
    );
}

export default page;
