// __mocks__/@/lib/db.ts

export const db = {
    insert: jest.fn(() => ({
        values: jest.fn().mockResolvedValue({
            id: 1,
            doctorName: "Dr. John Doe",
            doctorImage: "https://example.com/image.jpg",
            doctorDescription: "Cardiology Specialist",
            specialization: "Cardiology",
            dateAvailable: "2025-05-01",
            totalBookingAcceptedInTheDay: "10",
        }),
    })),

    select: jest.fn(() => ({
        from: jest.fn().mockResolvedValue([
            { patientId: 1, name: "John Doe" },
            { patientId: 2, name: "Jane Doe" },
        ]),
    })),

    delete: jest.fn(() => ({
        where: jest.fn().mockResolvedValue({ success: true }),
    })),
};
