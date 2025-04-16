"use client";
import React from "react";
import { MyAppointmentsProps } from "../..";

function MyAppointments({ id }: MyAppointmentsProps) {
    return (
        <>
            <h1>{id}</h1>
        </>
    );
}

export default MyAppointments;
