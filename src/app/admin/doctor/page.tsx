"use client";

import React, { useEffect, useState } from "react";
import { Doctor } from "../../../..";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DoctorList() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);
    const route = useRouter();

    async function deleteDoctor(id: number) {
        try {
            const res = await fetch("/api/admin/doctor", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            if (res.ok) {
                setDoctors(doctors.filter((d) => d.doctorId !== id));
                route.push("/");
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch("/api/admin/doctor");
                const res = await result.json();
                return setDoctors(res);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <p className="text-gray-500">Loading doctors...</p>;

    return (
        <div className="p-6 bg-gradient-to-br from-white to-indigo-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Hello Admin, here is your Doctor list
            </h1>
            <div className="overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-indigo-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider"
                            >
                                Doctor
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider"
                            >
                                Specialization
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase tracking-wider"
                            >
                                Bookings
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-semibold text-indigo-700 uppercase tracking-wider"
                            >
                                Actions
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-semibold text-indigo-700 uppercase tracking-wider"
                            >
                                Patient
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {doctors.map((d, idx) => (
                            <tr
                                key={d.doctorId}
                                className={`hover:bg-indigo-50 transition-colors ${
                                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 relative rounded-full overflow-hidden shadow-md border border-gray-300">
                                            <Image
                                                src={d.doctorImage}
                                                alt={`Dr. ${d.doctorName}`}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {d.doctorName}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                ID: {d.doctorId}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {d.specialization}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-semibold">
                                    {d.totalBookingAcceptedInTheDay} today
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                    <button
                                        onClick={() => deleteDoctor(d.doctorId)}
                                        className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                    <button
                                        onClick={() =>
                                            route.push(
                                                `/admin/doctor/id/?id=${d.doctorId}`
                                            )
                                        }
                                        className="text-red-500 hover:text-red-700 font-medium transition-colors duration-200"
                                    >
                                        see patient
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {doctors.length === 0 && (
                    <div className="px-6 py-16 text-center bg-white">
                        <p className="text-gray-400 text-sm">
                            No doctors found.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
