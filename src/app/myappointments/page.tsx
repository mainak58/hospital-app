"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, useCallback, Suspense } from "react";
import { PatientAppointments } from "../../..";
import LoadingAppointment from "@/components/LoadingAppointment";
import PatientAppointment from "@/components/PatientAppointment";

function MyAppointment() {
    const searchParams = useSearchParams();
    const search = searchParams.get("id");
    const [doctorList, setDoctorList] = useState<PatientAppointments[]>([]);
    const [loading, setLoading] = useState(false);

    const loadFunction = useCallback(async () => {
        if (!search) return;
        setLoading(true);
        try {
            const body = await fetch(`/api/myappointments?id=${search}`);
            const result = await body.json();
            setDoctorList(result);
        } catch (error) {
            console.error("Error loading appointments:", error);
        } finally {
            setLoading(false);
        }
    }, [search]);

    useEffect(() => {
        loadFunction();
    }, [loadFunction]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
                My Appointments
            </h1>

            {loading ? (
                <LoadingAppointment />
            ) : doctorList.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                    {doctorList.map((appointment) => (
                        <div
                            key={appointment.patientId}
                            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <PatientAppointment
                                doctorName={appointment.doctor.doctorName}
                                specialization={
                                    appointment.doctor.specialization
                                }
                                date={new Date(
                                    appointment.doctor.dateAvailable
                                ).toLocaleDateString()}
                                bookingSlotNumber={
                                    appointment.bookingSlotNumber
                                }
                                patientName={appointment.patientName}
                                email={appointment.email}
                                patientAddress={appointment.patientAddress}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                    <svg
                        className="w-16 h-16 text-gray-300 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <h3 className="text-lg font-medium text-gray-700">
                        No appointments found
                    </h3>
                    <p className="text-gray-500 mt-2">
                        You dont have any upcoming appointments scheduled.
                    </p>
                </div>
            )}
        </div>
    );
}

export default function FetchAppointment() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MyAppointment />
        </Suspense>
    );
}
