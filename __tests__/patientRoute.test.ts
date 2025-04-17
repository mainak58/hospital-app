import { GET, DELETE } from "@/app/api/admin/patient/route";
import { NextResponse } from "next/server";
jest.mock("@/lib/db");

describe("Patient API", () => {
    describe("GET /api/admin/patient", () => {
        it("should return list of patients", async () => {
            const response = await GET();
            const data = await response.json();

            expect(response.status).toBe(200);
            expect(Array.isArray(data)).toBe(true);
            expect(data[0]).toHaveProperty("patientId");
        });

        it("should handle GET errors", async () => {
            const { db } = require("@/lib/db");
            db.select.mockImplementationOnce(() => {
                throw new Error("DB error");
            });

            const response = await GET();
            const data = await response.json();

            expect(response.status).toBe(400);
            expect(data.message).toMatch(/Error in doctor route/i);
        });
    });

    describe("DELETE /api/admin/patient", () => {
        it("should delete patient by id", async () => {
            const request = new Request("http://localhost/api/admin/patient", {
                method: "DELETE",
                body: JSON.stringify({ id: 1 }),
            });

            const response = await DELETE(request);
            const data = await response.json();

            expect(response.status).toBe(200);
            expect(data).toHaveProperty("success", true);
        });

        it("should handle DELETE errors", async () => {
            const { db } = require("@/lib/db");
            db.delete.mockImplementationOnce(() => {
                throw new Error("Delete failed");
            });

            const request = new Request("http://localhost/api/admin/patient", {
                method: "DELETE",
                body: JSON.stringify({ id: 1 }),
            });

            const response = await DELETE(request);
            const data = await response.json();

            expect(response.status).toBe(400);
            expect(data.message).toMatch(/Error in doctor route/i);
        });
    });
});
