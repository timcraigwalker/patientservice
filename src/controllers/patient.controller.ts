import { Request, Response, Router } from "express";
import { ObservationService } from "../services/observation.service";
import { PatientService } from "../services/patient.service"; 

export class PatientController {
    public router = Router();
    private observationService:ObservationService = new ObservationService();

    constructor(private patientService: PatientService) {
        this.setRoutes();
    }

    public setRoutes(){
        this.router.route("/").get(this.search).post(this.add);
        this.router.route("/:id/observations").get(this.findAllPatientObservations);
    }

    private add = async (req: Request, res: Response) => {
        // Create a patient entity
        try {
            const addPatientResult = await this.patientService.add(req.body);
            res.send(addPatientResult);
        } catch (e) {
            res.status(500).send((e as Error).message);
        }
    }

    private search = async (req: Request, res: Response) => {
        // Get and return patients matching search criteria
        const patient = await this.patientService.find(req.query);
        if (!patient.length) {
            res.status(404).send("Patient Not Found");
            return;
        }
        res.send(patient);
    }

    private findAllPatientObservations = async (req: Request, res: Response) => {
        // Check if the patient exists before getting observations
        const patient = await this.patientService.findById(req.params.id);
        if (!patient) {
            res.status(404).send("Patient Not Found");
            return;
        }

        // Get all observations for current patient
        const patientObservations = await this.observationService.findAllByPatientId(req.params.id);
        res.send(patientObservations);
    }
}