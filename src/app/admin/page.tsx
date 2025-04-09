"use client";

import { ChangeEvent, useState } from "react";

export default function Admin() {
    const [name, setName] = useState("");
    const [images, setImages] = useState("");
    const [special, setSpecial] = useState("");
    const [description, setDesription] = useState("");
    const [date, setDate] = useState("");
    const [totalBooking, setTotalBooking] = useState("");

    class CreateDoctor {
        handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
        };

        handleImg = (e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImages(reader.result as string);
                };
                reader.readAsDataURL(file);
            }
        };

        handleSpecial = (e: ChangeEvent<HTMLInputElement>) => {
            setSpecial(e.target.value);
        };

        handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
            setDesription(e.target.value);
        };

        handleDate = (e: ChangeEvent<HTMLInputElement>) => {
            setDate(e.target.value);
        };

        handleTotalBooking = (e: ChangeEvent<HTMLInputElement>) => {
            setTotalBooking(e.target.value);
        };

        async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();

            try {
                const res = await fetch("/api/admin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        image: images,
                        description,
                        date,
                        special,
                        totalBooking,
                    }),
                });

                const result = await res.json();
                console.log(result);

                if (res.ok) {
                    alert("Doctor created successfully");
                    setName("");
                    setImages("");
                    setDate("");
                    setSpecial("");
                    setDesription("");
                    setTotalBooking("");
                } else {
                    alert("Something went wrong");
                }
            } catch (error) {
                console.log("Submit error:", error);
            }
        }
    }

    const createDoctor = new CreateDoctor();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <form
                onSubmit={createDoctor.handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md space-y-5"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    Add Doctor
                </h2>

                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={createDoctor.handleNameChange}
                    />
                </div>

                <div>
                    <label
                        htmlFor="img"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Picture
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={createDoctor.handleImg}
                    />
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={description}
                        onChange={createDoctor.handleDescription}
                    />
                </div>

                <div>
                    <label
                        htmlFor="specialization"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Specialization
                    </label>
                    <input
                        type="text"
                        id="specialization"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={special}
                        onChange={createDoctor.handleSpecial}
                    />
                </div>

                <div>
                    <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={date}
                        onChange={createDoctor.handleDate}
                    />
                </div>

                <div>
                    <label
                        htmlFor="totalbooking"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Total Booking
                    </label>
                    <input
                        type="text"
                        id="totalbooking"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={totalBooking}
                        onChange={createDoctor.handleTotalBooking}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
