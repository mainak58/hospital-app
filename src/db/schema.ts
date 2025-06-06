import { relations } from "drizzle-orm";
import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const doctorTable = pgTable("doctors", {
    doctorId: integer().primaryKey().generatedAlwaysAsIdentity(),
    doctorName: varchar({ length: 255 }).notNull(),
    doctorImage: varchar(),
    doctorDescription: varchar().notNull(),
    specialization: varchar({ length: 255 }).notNull(),
    dateAvailable: date().notNull(),
    totalBookingAcceptedInTheDay: integer(),
});

export const patientTable = pgTable("patients", {
    patientId: integer().primaryKey().generatedAlwaysAsIdentity(),
    patientName: varchar({ length: 50 }).notNull(),
    bookingSlotNumber: integer().notNull(),
    email: varchar(),
    patientAddress: varchar(),
    clerkId: varchar(),
    doctorId: integer("doctorId")
        .references(() => doctorTable.doctorId, { onDelete: "cascade" })
        .notNull(),
});

export const doctorRelations = relations(doctorTable, ({ many }) => ({
    patients: many(patientTable),
}));

export const patientRelations = relations(patientTable, ({ one }) => ({
    doctor: one(doctorTable, {
        fields: [patientTable.doctorId],
        references: [doctorTable.doctorId],
    }),
}));
