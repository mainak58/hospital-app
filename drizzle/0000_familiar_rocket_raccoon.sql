CREATE TABLE "doctors" (
	"doctorId" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "doctors_doctorId_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"doctorName" varchar(255) NOT NULL,
	"specalization" varchar(255) NOT NULL,
	"dateAvilable" date NOT NULL,
	"totalBookingAcceptedInTheDay" integer,
	CONSTRAINT "doctors_doctorId_unique" UNIQUE("doctorId")
);
--> statement-breakpoint
CREATE TABLE "patients" (
	"patientId" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "patients_patientId_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"patientName" varchar(50) NOT NULL,
	"bookingSlotNumber" integer NOT NULL,
	"doctorId" integer NOT NULL,
	CONSTRAINT "patients_patientId_unique" UNIQUE("patientId")
);
--> statement-breakpoint
ALTER TABLE "patients" ADD CONSTRAINT "patients_doctorId_doctors_doctorId_fk" FOREIGN KEY ("doctorId") REFERENCES "public"."doctors"("doctorId") ON DELETE cascade ON UPDATE no action;