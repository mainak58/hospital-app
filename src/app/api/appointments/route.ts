import { patientTable } from "@/db/schema";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const body = await request.json();
    const { clerkId, patientName, bookingSlotNumber, email, patientAddress } =
        await body;

    try {
        const create = await db.insert(patientTable).values({
            patientName: patientName ? patientName : "wwww.dummy.com",
            bookingSlotNumber: bookingSlotNumber
                ? bookingSlotNumber
                : "good first doctor",
            email: email ? email : "",
            patientAddress: patientAddress ? patientAddress : "",
            doctorId: id ? Number(id) : 1,
            clerkId: clerkId ? clerkId : 0,
        });
        return NextResponse.json({ success: true, data: create });
    } catch (error) {
        console.log(error);
    }
}
