import express from 'express';
import { atualizarProfessor, criarProfessor, excluirProfessor, obterProfessor,obterTodosProfessores } from '../controllers/professorController';

const router = express.Router();

router.post('/criar',criarProfessor);
router.post('/obterTodos',obterTodosProfessores);
router.post('/obterUm',obterProfessor);
router.post('/atualizar',atualizarProfessor);
router.post('/excluir',excluirProfessor);


export default router;


