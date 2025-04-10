import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { PatientWithDoctor } from "../../../../../..";

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

        // Type the result with the proper interface
        const result = (await db.query.patientTable.findMany({
            where: (patient) => eq(patient.doctorId, id),
            with: {
                doctor: true,
            },
        })) as PatientWithDoctor[];

        return NextResponse.json(result);
    } catch (error) {
        console.error("Error in doctor route:", error);
        return NextResponse.json(
            {
                message: `Error in doctor route ${
                    error instanceof Error ? error.message : String(error)
                }`,
            },
            {
                status: 500,
            }
        );
    }
}
