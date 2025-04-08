"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Doctor } from "../..";

export default function Home() {
    const [date, setDate] = useState<Date | null>(null);
    const [doctor, setDoctor] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(false);

    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        fetchDoctor(today);
        setLoading(false);
    }, [date]);

    class DateAndTime {
        constructor() {
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e: ChangeEvent<HTMLInputElement>) {
            e.preventDefault();
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

                <label htmlFor="doctor">Doctor name:</label>
                <select name="doctor" id="doctor">
                    {loading ? (
                        doctor.map((d) => (
                            <option key={d.doctorId} value={d.doctorId}>
                                {d.doctorName}
                            </option>
                        ))
                    ) : (
                        <h1>false</h1>
                    )}
                </select>

                <label htmlFor="cars">Specalization for:</label>
                <select name="cars" id="cars">
                    <option value="audi">Audi</option>
                </select>
            </div>
        </>
    );
}
