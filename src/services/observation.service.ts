import { IObservation } from "../interfaces/observation.interface";
import { Observation } from "../models/observation.model";

export class ObservationService {
    public add(observation: IObservation): Promise<IObservation> {
        const newObservation = new Observation(observation);
        return newObservation.save();
    }

    public findAll(): Promise<IObservation[]> {
        return Observation.find({}).exec();
    }

    public findAllByPatientId(patientId: String): Promise<IObservation[]> {
        return Observation.find({"subject": {"reference": `Patient/${patientId}`}}).exec();
    }
}