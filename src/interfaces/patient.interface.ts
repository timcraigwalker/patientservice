import { Document } from "mongoose";

export interface IPatient extends Document {
    resourceType: string;
    id: string;
    identifier: Identifier[];
    name: Name[];
    telecom: Telecom[];
    gender: string;
    birthDate: string;
    address: Address[];
}

interface Identifier {
    system: string;
    value: string;
}

interface Name {
    use: string;
    text: string;
    family: string;
    given: string[];
    prefix: string[];
}

interface Telecom {
    system: string;
    value: string;
    use: string;
}

interface Address {
    use: string;
    text: string;
    city: string;
    state: string;
    postalCode: string;
}