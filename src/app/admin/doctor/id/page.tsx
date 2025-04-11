"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PatientWithDoctor } from "../../../../..";


export default function FetchPatient() {
    const [fetchPatient, setFetchPatient] = useState<PatientWithDoctor[]>([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    console.log(id);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        async function loadPatient() {
            try {
                setLoading(true);
                const res = await fetch(`/api/admin/doctor/id?id=${id}`);
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                const result = await res.json();
                console.log("Fetched patient:", result);
                setFetchPatient(result);
            } catch (error) {
                console.error("Error fetching patient:", error);
            } finally {
                setLoading(false);
            }
        }

        loadPatient();
    }, [id]);

    return (
        <>
            <h1>Doctor ID: {id}</h1>

            {loading ? (
                <p>Loading patients...</p>
            ) : fetchPatient.length > 0 ? (
                fetchPatient.map((f) => (
                    <div key={f.patientId} className="p-4 border mb-4 rounded">
                        <p>
                            <strong>Name:</strong> {f.patientName}
                        </p>
                        <p>
                            <strong>Email:</strong> {f.email}
                        </p>
                        <p>
                            <strong>Address:</strong> {f.patientAddress}
                        </p>
                        <p>
                            <strong>Booking Slot:</strong> {f.bookingSlotNumber}
                        </p>
                        <p>
                            <strong>Doctor:</strong> {f.doctor.doctorName}
                        </p>
                    </div>
                ))
            ) : (
                <p>No patients found for this doctor.</p>
            )}
        </>
    );
}
