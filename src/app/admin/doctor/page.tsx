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
        <div>
            {doctors.map((d) => (
                <div key={d.doctorId}>
                    <h1>{d.doctorName}</h1>

                    <p>{d.specialization}</p>
                    <p>{d.totalBookingAcceptedInTheDay}</p>
                    <Image
                        src={d.doctorImage}
                        alt="Doctor image"
                        width={150}
                        height={150}
                        objectFit="cover"
                    />
                    <button onClick={() => deleteDoctor(d.doctorId)}>
                        {" "}
                        Delete{" "}
                    </button>
                </div>
            ))}
        </div>
    );
}
