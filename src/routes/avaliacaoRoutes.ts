import express from 'express';
import { atualizarAvaliacao, criarAvaliacao, excluirAvaliacao, obterAvaliacao,obterTodasAvaliacoes } from '../controllers/avaliacaoController';

const router = express.Router();


router.post('/criar', criarAvaliacao);


router.get('/obterTodas', obterTodasAvaliacoes)

router.get('/obterUma', obterAvaliacao)

router.get('/atualizar',atualizarAvaliacao)

router.get('/excluir',excluirAvaliacao)



export default router;