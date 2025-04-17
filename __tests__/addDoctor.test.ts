import { POST } from "@/app/api/admin/adddoctor/route";
jest.mock("@/lib/db");

describe("POST /api/admin/adddoctor", () => {
    it("should insert a new doctor and return success", async () => {
        const body = {
            name: "Dr. John Doe",
            image: "https://example.com/image.jpg",
            description: "Cardiology Specialist",
            special: "Cardiology",
            date: "2025-05-01",
            totalBooking: "10",
        };

        const request = new Request("http://localhost/api/admin/adddoctor", {
            method: "POST",
            body: JSON.stringify(body),
        });

        const response = await POST(request);
        const result = await response.json();

        expect(response.status).toBe(200);
        expect(result.success).toBe(true);
    });
});
