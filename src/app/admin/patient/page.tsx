"use client";

import React, { useEffect, useState } from "react";
import { Patient } from "../../../..";
import { useRouter } from "next/router";

export default function AllPatient() {
    const [patients, setPatient] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);

    const route = useRouter();

    async function deletePatient(id: number) {
        try {
            const res = await fetch("/api/admin/patient", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            if (res.ok) {
                route.push("/");
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch("/api/admin/patient");
                const res = await result.json();
                return setPatient(res);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <p className="text-gray-500">Loading patient...</p>;

    return (
        <div>
            {patients.map((p) => (
                <div key={p.patientId}>
                    <h1>Patient Name</h1>
                    <h1>{p.patientName}</h1>
                    <h1>Patient Email</h1>
                    <p>{p.email}</p>
                    <h1>Check Booked or not</h1>
                    <p>{p.bookingSlotNumber}</p>
                    <button onClick={() => deletePatient(p.patientId)}>
                        {" "}
                        Delete{" "}
                    </button>
                </div>
            ))}
        </div>
    );
}
