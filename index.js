import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import turnosRoutes from "./routes/turnos.routes.js";

const app = express();

const corsOptions ={
    accessControlAllowOrigin: 'https://aesthetic-vacherin-41d63e.netlify.app',
    credentials:true,           //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());

app.use(indexRoutes);
app.use(turnosRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
