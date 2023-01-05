import express from "express";
import cors from "cors";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import turnosRoutes from "./routes/turnos.routes.js";

const app = express();

const corsOptions ={
    origin:'', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());

app.use(indexRoutes);
app.use(turnosRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
