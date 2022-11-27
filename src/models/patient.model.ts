import { IPatient } from "../interfaces/patient.interface";
import { model } from "mongoose";
import { PatientSchema } from "../schemas/patient.schema";

export const Patient = model<IPatient>("Patient", PatientSchema);