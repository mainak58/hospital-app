import ClientForm from "@/components/ClientForm";
import { auth, currentUser } from "@clerk/nextjs/server";


async function page() {
    const { userId, redirectToSignIn } = await auth();
    const user = await currentUser();
    if (!userId) return redirectToSignIn();
    const email = user?.primaryEmailAddress?.emailAddress || "";

    
    return (
        <>
            <ClientForm
                name={user?.fullName || ""}
                email={user?.primaryEmailAddress?.emailAddress || ""}
            />
        </>
    );
}

export default page;
