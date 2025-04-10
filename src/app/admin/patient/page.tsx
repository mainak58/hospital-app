"use client";

import React, { useEffect, useState } from "react";
import { Patient } from "../../../..";
import { useRouter } from "next/navigation";

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
                setPatient(patients.filter((p) => p.patientId !== id));
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
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Hello Admin, here is your patient list
            </h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
                    <thead className="bg-blue-50 text-blue-600 text-sm uppercase tracking-wide">
                        <tr>
                            <th className="px-6 py-3 text-left">Name</th>
                            <th className="px-6 py-3 text-left">Email</th>
                            <th className="px-6 py-3 text-left">
                                Booking Slot
                            </th>
                            <th className="px-6 py-3 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-700">
                        {patients.map((p) => (
                            <tr
                                key={p.patientId}
                                className="border-t hover:bg-gray-50 transition-all duration-200"
                            >
                                <td className="px-6 py-4 font-medium">
                                    {p.patientName}
                                </td>
                                <td className="px-6 py-4">{p.email}</td>
                                <td className="px-6 py-4">
                                    {p.bookingSlotNumber
                                        ? `Slot ${p.bookingSlotNumber}`
                                        : "Not Booked"}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() =>
                                            deletePatient(p.patientId)
                                        }
                                        className="bg-red-500 text-white px-4 py-2 text-sm rounded-full hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
