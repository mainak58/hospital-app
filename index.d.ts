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

export interface PatientWithDoctor {
    patientId: number;
    patientName: string;
    bookingSlotNumber: number;
    email: string;
    patientAddress: string;
    doctorId?: number;
    doctor: {
        doctorId: number;
        doctorName: string;
        doctorImage?: string;
    };
}

export type Roles = "admin" | "moderator";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        };
    }
}

export interface ClientProps {
    userId?: string;
    name: string;
    email: string;
    firstName?: string;
}
