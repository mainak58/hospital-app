export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { doctorTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
        return NextResponse.json(
            { error: "Date parameter is required" },
            { status: 400 }
        );
    }

    try {
        const doctorByDate = await db
            .select()
            .from(doctorTable)
            .where(eq(doctorTable.dateAvailable, date));
        return NextResponse.json(doctorByDate);
    } catch (error) {
        return NextResponse.json(
            { error: `Error in route file ${error}` },
            { status: 500 }
        );
    }
}
