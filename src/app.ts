import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { MONGO_URL } from "./constants/patientservice.constants";
import { ObservationController } from "./controllers/observation.controller";
import { ObservationService } from "./services/observation.service";
import { PatientController } from "./controllers/patient.controller";
import { PatientService } from "./services/patient.service";


class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.setControllers();
  }

  private setConfig() {
    // Allows requests to be received with data in json format
    this.app.use(bodyParser.json({ limit: "50mb" }));

    // Allows requests to be received with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    
    // Enables cors
    this.app.use(cors());
  }

  private setMongoConfig() {
    // Create mongo db connection through mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL);
  }

  private setControllers() {
    // Create instance for each controller
    const observationController = new ObservationController(new ObservationService());
    const patientController = new PatientController(new PatientService());

    // Enable the controller routes
    this.app.use("/Observation", observationController.router)
    this.app.use("/Patient", patientController.router) 
  }
}

export default new App().app;