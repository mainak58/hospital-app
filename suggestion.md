<!-- Option 1: Delete All Patients with Expired Doctors (One-liner SQL) -->

DELETE FROM patients
WHERE doctor_id IN (
SELECT doctor_id FROM doctors WHERE date_avilable < CURRENT_DATE
);
You can run this periodically via:

a CRON job

a scheduled server function

or call it manually from your app

<!-- Option 2: Truncate the Patients Table Entirely -->

If you’re okay resetting all bookings:
TRUNCATE TABLE patients;
⚠️ This removes all rows, so use with care.

Bonus: Limit Bookings Based on totalBookingAcceptedInTheDay
In your backend logic (e.g. during booking request), you can check:

const currentBookings = await db
.select()
.from(patientTable)
.where(eq(patientTable.doctorId, doctorId));

if (currentBookings.length >= doctor.totalBookingAcceptedInTheDay) {
throw new Error("Booking limit reached for this doctor today.");
}
