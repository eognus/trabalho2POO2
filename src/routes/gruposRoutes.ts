import express from 'express';
import { atualizarGrupo, criarGrupo, excluirGrupo, obterGrupo ,obterTodosGrupos} from '../controllers/gruposController';

const router = express.Router();

// Rota para criar um novo grupo
router.post('/criar',criarGrupo);
router.post('/obterTodos',obterTodosGrupos);
router.post('/obterUm',obterGrupo);
router.post('/atualizar',atualizarGrupo);
router.post('/excluir',excluirGrupo);

export default router;