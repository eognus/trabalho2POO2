import express from 'express';
import { atualizarAluno, criarAluno, excluirAluno, obterAluno,obterTodosAlunos} from '../controllers/alunosController';

const router = express.Router();

router.post('/criar', criarAluno);
router.post('/obterTodos',obterTodosAlunos);

router.post('/obterUm',obterAluno);
router.post('/atualizar',atualizarAluno);
router.post('/excluir',excluirAluno);

export default router;