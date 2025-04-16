import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { message: "Doctor ID is required" },
                { status: 400 }
            );
        }

        const result = await db.query.patientTable.findMany({
            where: (patient) => eq(patient.clerkId, id),
            with: {
                doctor: true,
            },
        });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            { error: `Error in appointment route: ${error}` },
            { status: 500 }
        );
    }
}
