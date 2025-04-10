export type Doctor = {
    doctorId: number;
    doctorName: string;
    doctorImage: string;
    doctorDescription;
    specialization: string;
    dateAvailable: string;
    totalBookingAcceptedInTheDay: number | null;
};

export type Patient = {
    patientId: number;
    patientName: string;
    bookingSlotNumber: number;
    email: string;
    patientAddress: string;
    doctorId: number;
};
