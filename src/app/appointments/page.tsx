"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Doctor } from "../../..";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Appointments() {
    const [date, setDate] = useState<Date | null>(null);
    const [doctor, setDoctor] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

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
            <form action="">
                <div className="space-y-8 px-4 sm:px-8 py-6 max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <label
                            htmlFor="date"
                            className="text-lg font-semibold text-gray-700"
                        >
                            Choose Appointment Date:
                        </label>
                        <input
                            id="date"
                            type="date"
                            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            value={date ? date.toISOString().split("T")[0] : ""}
                            onChange={dateAndTime.handleChange}
                            min={today}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {!loading && doctor.length > 0 ? (
                            doctor.map((d) => (
                                <div
                                    key={d.doctorId}
                                    className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col"
                                >
                                    {/* Doctor Image */}
                                    <div className="relative h-52 w-full">
                                        <Image
                                            src={d.doctorImage}
                                            alt={`Dr. ${d.doctorName}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-5 flex flex-col justify-between flex-grow">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">
                                                Dr. {d.doctorName}
                                            </h2>
                                            <p className="text-xl font-semibold text-indigo-600 mt-1">
                                                {d.specialization}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-2">
                                                {d.totalBookingAcceptedInTheDay}{" "}
                                                bookings today
                                            </p>
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const formattedDate = date
                                                    ?.toISOString()
                                                    .split("T")[0];
                                                router.push(
                                                    `/appointments/id?id=${d.doctorId}&date=${formattedDate}`
                                                );
                                            }}
                                            className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium transition duration-200"
                                        >
                                            Select Doctor
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500 py-12">
                                No doctors available for this date.
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </>
    );
}

