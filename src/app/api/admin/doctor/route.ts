import { doctorTable } from "@/db/schema";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await db.select().from(doctorTable);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            {
                message: `Error in doctor route ${error}`,
            },
            {
                status: 400,
            }
        );
    }
}
