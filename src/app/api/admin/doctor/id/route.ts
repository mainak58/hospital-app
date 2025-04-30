import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { PatientWithDoctor } from "../../../../../..";

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const uid = url.searchParams.get("id");

        const result = (await (db as any).query.patientTable.findMany({
            where: (patient: any) => eq(patient.doctorId, uid),
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
