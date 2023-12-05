import { Router } from "express";
import AvaliacaoController from "../controllers/avaliacaocontroller";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get('/avaliacoes', AvaliacaoController.listAvaliacao)

AvaliacaoRouter.post('/avaliacoes', AvaliacaoController.createAvaliacao);

AvaliacaoRouter.put('/avaliacoes', AvaliacaoController.updateAvaliacao);

AvaliacaoRouter.delete('/avaliacoes', AvaliacaoController.deleteAvaliacao);

export default AvaliacaoRouter;