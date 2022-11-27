import { Document } from "mongoose";

export interface IObservation extends Document {
    resourceType: string;
    id: string;
    code: Code;
    valueQuantity: ValueQuantity;
    issued: string;
    status: string;
    subject: Subject;
}

interface Code {
    coding: Coding[];
    text: string;
}

interface Coding {
    system: string;
    code: string;
    display: string;
}

interface ValueQuantity {
    value: number;
    unit: string;
}

interface Subject {
    reference: string;
}