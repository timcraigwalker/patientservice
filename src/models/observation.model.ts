import { IObservation } from "../interfaces/observation.interface";
import { model } from "mongoose";
import { ObservationSchema } from "../schemas/observation.schema"; 

export const Observation = model<IObservation>("Observation", ObservationSchema);