import React from "react";
import { PatientAppointmentInterface } from "../..";

function PatientAppointment({
    doctorName,
    specialization,
    date,
    bookingSlotNumber,
    patientName,
    email,
    patientAddress,
}: PatientAppointmentInterface) {
    return (
        <>
            <div className="bg-blue-600 px-4 py-3">
                <h3 className="text-lg font-semibold text-white">
                    Dr. {doctorName}
                </h3>
                <p className="text-blue-100 text-sm">{specialization}</p>
            </div>

            <div className="p-4">
                <div className="mb-4">
                    <p className="text-sm text-gray-500">Appointment Details</p>
                    <div className="flex justify-between items-center mt-1">
                        <p className="text-gray-700">
                            <span className="font-medium">Date:</span> {date}
                        </p>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            Slot #{bookingSlotNumber}
                        </span>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-3">
                    <p className="text-sm text-gray-500">Patient Information</p>
                    <p className="text-gray-700 font-medium mt-1">
                        {patientName}
                    </p>
                    <p className="text-gray-600 text-sm">{email}</p>
                    <p className="text-gray-600 text-sm">{patientAddress}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Details
                    </button>
                </div>
            </div>
        </>
    );
}

export default PatientAppointment;
