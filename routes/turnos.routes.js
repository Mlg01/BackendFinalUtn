import { Router } from "express";
import {
  getTurnos,
  getTurno,
  createTurno,
  deleteTurno,
  updateTurno,
} from "../controllers/turnos.controllers.js";

const router = Router();

//Obtiene todos los turnos
router.get("/turnos", getTurnos);

//Obtiene un solo turno
router.get("/turnos/:id", getTurno);

// Crea un turno
router.post("/turnos", createTurno);

//Actualiza el Turno
router.put("/turnos/:id", updateTurno);

// Elimina el turno
router.delete("/turnos/:id", deleteTurno);

export default router;
