"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { PatientAppointments } from "../../..";

function MyAppointment() {
    const searchParams = useSearchParams();
    const search = searchParams.get("id");
    const [doctorList, setDoctorList] = useState<PatientAppointments[]>([]);
    const [loading, setLoading] = useState(false);

    async function loadFunction() {
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
    }

    // Automatically call loadFunction when component mounts
    useEffect(() => {
        loadFunction();
    }, [search]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
                My Appointments
            </h1>

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-700">Loading appointments...</p>
                    </div>
                </div>
            ) : doctorList.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                    {doctorList.map((appointment) => (
                        <div
                            key={appointment.patientId}
                            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="bg-blue-600 px-4 py-3">
                                <h3 className="text-lg font-semibold text-white">
                                    Dr. {appointment.doctor.doctorName}
                                </h3>
                                <p className="text-blue-100 text-sm">
                                    {appointment.doctor.specialization}
                                </p>
                            </div>

                            <div className="p-4">
                                <div className="mb-4">
                                    <p className="text-sm text-gray-500">
                                        Appointment Details
                                    </p>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-gray-700">
                                            <span className="font-medium">
                                                Date:
                                            </span>{" "}
                                            {new Date(
                                                appointment.doctor.dateAvailable
                                            ).toLocaleDateString()}
                                        </p>
                                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                                            Slot #
                                            {appointment.bookingSlotNumber}
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-3">
                                    <p className="text-sm text-gray-500">
                                        Patient Information
                                    </p>
                                    <p className="text-gray-700 font-medium mt-1">
                                        {appointment.patientName}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {appointment.email}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {appointment.patientAddress}
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        View Details
                                    </button>
                                </div>
                            </div>
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
                        You don't have any upcoming appointments scheduled.
                    </p>
                </div>
            )}
        </div>
    );
}

export default MyAppointment;
