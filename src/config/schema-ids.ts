import { SITE_URL } from "@/config/routes";
// Stable JSON-LD identifiers. The full organization node lives once in index.html;
// page schema only references it by @id.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Only values from schema.org's MedicalSpecialty enumeration.
export type MedicalSpecialtyValue = "Dentistry" | "Surgical" | "Radiography" | "Pediatric" | "Emergency";
// Procedure subtypes defined by schema.org (procedureType enum is only Noninvasive/Percutaneous, so it is not used).
export type ProcedureKind = "TherapeuticProcedure" | "SurgicalProcedure" | "DiagnosticProcedure";
