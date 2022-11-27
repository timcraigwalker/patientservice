import { IPatient } from "../interfaces/patient.interface";
import { Patient } from "../models/patient.model"; 

export class PatientService {
    public add(patient: IPatient): Promise<IPatient> {
        const newPatient = new Patient(patient);
        return newPatient.save();
    }

    public findById(id: String) {
        return Patient.findOne({id: id}).exec();
    }
    
    public find(args: Object): Promise<IPatient[]> {
        return Patient.find(args).exec();
    }
}