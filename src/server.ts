import app from "./app";
import { PORT } from "./constants/patientservice.constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));