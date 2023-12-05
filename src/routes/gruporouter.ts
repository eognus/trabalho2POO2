import { Router } from "express";
import GrupoController from "../controllers/grupocontroller";

const GrupoRouter = Router();

GrupoRouter.get('/projetos', GrupoController.listGrupo)

GrupoRouter.post('/projetos', GrupoController.createGrupo);

GrupoRouter.put('/projetos', GrupoController.updateGrupo);

GrupoRouter.delete('/projetos', GrupoController.deleteGrupo);

export default GrupoRouter;