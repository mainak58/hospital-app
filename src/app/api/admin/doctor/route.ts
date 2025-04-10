import { doctorTable } from "@/db/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
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

export async function DELETE(request: Request) {
    const body = await request.json();
    const { id } = await body;
    try {
        const result = await db
            .delete(doctorTable)
            .where(eq(doctorTable.doctorId, id));
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
