import { Request, Response, Router } from "express";
import { ObservationService } from "../services/observation.service";

export class ObservationController {
    public router = Router();

    constructor(private observationService: ObservationService) {
        this.setRoutes();
    }

    public setRoutes(){
        this.router.route("/").post(this.add);
    }

    private add = async (req: Request, res: Response) => {
        try {
            const addObservationResult = await this.observationService.add(req.body);
            res.send(addObservationResult);
        } catch (e) {
            res.status(500).send((e as Error).message);
        }
    }
}