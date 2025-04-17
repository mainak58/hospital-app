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
};
