"use client";

import { ChangeEvent, useState } from "react";
import { ClientProps } from "../..";
import { useRouter, useSearchParams } from "next/navigation";

function ClientForm({ name, email }: ClientProps) {
    const router = useRouter();

    const [address, setAddress] = useState("");

    const searchParams = useSearchParams();
    const searchId = searchParams.get("id");
    async function submitButton() {
        try {
            const result = await fetch(`/api/appointments?id=${searchId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    patientName: name,
                    bookingSlotNumber: 1,
                    email: email,
                    patientAddress: address,
                }),
            });
            const res = await result.json();
            if (res.success) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                submitButton();
            }}
            className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6"
        >
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Patient Address
                </label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setAddress(e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
            >
                Submit
            </button>
        </form>
    );
}

export default ClientForm;
