import React from "react";

function LoadingAppointment() {
    return (
        <div className="flex justify-center items-center h-40">
            <div className="animate-pulse flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-700">Loading appointments...</p>
            </div>
        </div>
    );
}

export default LoadingAppointment;
