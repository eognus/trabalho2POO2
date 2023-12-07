import express from 'express';
import { atualizarEstande, criarEstande, excluirEstande, obterEstande,obterTodosEstandes } from '../controllers/estandeController';

const router = express.Router();

router.post('/criar', criarEstande);
// Adicione outras rotas conforme necessário
router.post('/obterTodos',obterTodosEstandes);
router.post('/obterUm',obterEstande);
router.post('/atualizar',atualizarEstande);
router.post('/excluir',excluirEstande);

export default router;