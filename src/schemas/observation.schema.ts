import { Schema } from "mongoose";

export const ObservationSchema = new Schema(
    {
        resourceType: { type: String, required: [true, "Required field"] },
        id: { type: String, required: [true, "Required field"], unique: true },
        code: { 
            coding: [{ 
                system: {type: String, required: [true, "Required field"]}, 
                code: {type: String, required: [true, "Required field"]},
                display: {type: String, required: [true, "Required field"]},
            }], 
            text: {type: String, required: [true, "Required field"]},
        },
        valueQuantity: { 
            value: {type: String},
            unit: {type: String},
        },
        issued: { type: String, required: [true, "Required field"] },
        status: { type: String, required: [true, "Required field"] },
        subject: { 
            reference: {type: String, required: [true, "Required field"]},
        },
    }
);