import { db } from "@/lib/db";
import { doctorTable } from "@/db/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { name, image, description, date, special, totalBooking } = body;

    try {
        const create = await db.insert(doctorTable).values({
            doctorName: name ? name : "doctor",
            doctorImage: image ? image : "wwww.dummy.com",
            doctorDescription: description ? description : "good first doctor",
            specialization: special ? special : "",
            dateAvailable: date ? date : "",
            totalBookingAcceptedInTheDay: totalBooking ? totalBooking : "5",
        });
        return NextResponse.json({ success: true, data: create });
    } catch (error) {
        NextResponse.json(
            { message: `error in admin route ${error}` },
            { status: 400 }
        );
    }
}
