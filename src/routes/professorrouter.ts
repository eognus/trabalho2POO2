import { Router } from "express";
import ProfessorController from "../controllers/professorcontroller";

const ProfessorRouter = Router();

ProfessorRouter.get('/professores', ProfessorController.listProfessor)

ProfessorRouter.post('/professores', ProfessorController.createProfessor);

ProfessorRouter.put('/professores', ProfessorController.updateProfessor);

ProfessorRouter.delete('/professores', ProfessorController.deleteProfessor);

export default ProfessorRouter;