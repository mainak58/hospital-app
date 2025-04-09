"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Doctor } from "../../..";
import Image from "next/image";

export function Appointments() {
    const [date, setDate] = useState<Date | null>(null);
    const [doctor, setDoctor] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(false);

    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        const newDate = date?.toISOString().split("T")[0];
        if (newDate) {
            fetchDoctor(newDate);
        }
    }, [date]);

    class DateAndTime {
        constructor() {
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e: ChangeEvent<HTMLInputElement>) {
            e.preventDefault();
            setLoading(false);
            const value = e.target.value;
            setDate(value ? new Date(value) : null);
        }
    }

    async function fetchDoctor(dateString: string) {
        setLoading(true);
        try {
            const response = await fetch(`/api/doctors?date=${dateString}`);
            const data = await response.json();
            console.log(JSON.stringify(data));
            console.log(setDoctor(data));
            return setDoctor(data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
            setDoctor([]);
        } finally {
            setLoading(false);
        }
    }

    const dateAndTime = new DateAndTime();

    return (
        <>
            <div className="flex gap-2">
                <input
                    type="date"
                    className="bg-amber-400"
                    value={date ? date.toISOString().split("T")[0] : ""}
                    onChange={dateAndTime.handleChange}
                    min={today}
                />

                {!loading ? (
                    <>
                        {doctor.map((d) => (
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
                            </div>
                        ))}
                    </>
                ) : (
                    <div>No doctor available in this date</div>
                )}
            </div>
        </>
    );
}

export default Appointments;
