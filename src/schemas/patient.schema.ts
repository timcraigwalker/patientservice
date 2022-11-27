import { Schema } from "mongoose";

export const PatientSchema = new Schema(
    {
        resourceType: { type: String, required: [true, "Required field"] },
        id: { type: String, required: [true, "Required field"], unique: true },
        identifier: [{ 
            system: {type: String, required: [true, "Required field"]},
            value: {type: String, required: [true, "Required field"]},
            label: {type: String},
        }],
        name: [{ 
            use: {type: String}, 
            text: {type: String, required: [true, "Required field"]},
            family: {type: String, required: [true, "Required field"]},
            given: {type: [String], required: [true, "Required field"]},
            prefix: {type: [String], required: [true, "Required field"]},
        }],
        telecom: [{ 
            system: {type: String, required: [true, "Required field"]}, 
            value: {type: String, required: [true, "Required field"]},
            use: {type: String},
        }],
        gender: { type: String, required: [true, "Required field"] },
        birthDate: { type: String, required: [true, "Required field"] },
        address: [{ 
            use: {type: String}, 
            text: {type: String, required: [true, "Required field"]},
            city: {type: String, required: [true, "Required field"]},
            state: {type: String, required: [true, "Required field"]},
            postalCode: {type: String, required: [true, "Required field"]},
        }],
    }
);

PatientSchema.index({'identifier.system': 1, 'identifier.value': 1}, {unique: true});