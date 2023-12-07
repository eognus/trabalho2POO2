import { Request, Response } from 'express';
import { Avaliacao } from '../models/Avaliacao';
import { avaliacaoService } from '../services/avaliacaoService';
import { renderizarAvaliacaoHTML } from '../views/avaliacaoView';
import { renderizarAvaliacoesHTML } from '../views/avaliacaoView';


export const criarAvaliacao = async (req: Request, res: Response): Promise<void> => {
  try {
    const novaAvaliacao: Avaliacao = req.body;
    const avaliacaoCriada = await avaliacaoService.criarAvaliacao(novaAvaliacao);
    const htmlAvaliacao = renderizarAvaliacaoHTML(avaliacaoCriada);
    res.status(201).send(htmlAvaliacao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar avaliação' });
  }
};

export const obterTodasAvaliacoes = async (req: Request, res: Response): Promise<void> => {
  try {
    const avaliacoes = await avaliacaoService.obterTodasAvaliacoes();
    const htmlAvaliacoes = renderizarAvaliacoesHTML(avaliacoes);
    res.status(200).send(htmlAvaliacoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao obter avaliações' });
  }
};


export const obterAvaliacao = async (req: Request, res: Response): Promise<void> => {
  try {
    const numeroAvaliacao = parseInt(req.params.numeroAvaliacao, 10);
    const avaliacao = await avaliacaoService.obterAvaliacao(numeroAvaliacao);

    if (avaliacao) {
      const htmlAvaliacao = renderizarAvaliacaoHTML(avaliacao);
      res.status(200).send(htmlAvaliacao);
    } else {
      res.status(404).json({ erro: 'Avaliação não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao obter avaliação' });
  }
};

export const atualizarAvaliacao = async (req: Request, res: Response): Promise<void> => {
  try {
    const numeroAvaliacao = parseInt(req.params.numeroAvaliacao, 10);
    const dadosAtualizados: Avaliacao = req.body;
    const avaliacaoAtualizada = await avaliacaoService.atualizarAvaliacao(numeroAvaliacao, dadosAtualizados);

    if (avaliacaoAtualizada) {
      const htmlAvaliacao = renderizarAvaliacaoHTML(avaliacaoAtualizada);
      res.status(200).send(htmlAvaliacao);
    } else {
      res.status(404).json({ erro: 'Avaliação não encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar avaliação' });
  }
};

export const excluirAvaliacao = async (req: Request, res: Response): Promise<void> => {
  try {
    const numeroAvaliacao = parseInt(req.params.numeroAvaliacao, 10);
    await avaliacaoService.excluirAvaliacao(numeroAvaliacao);
    res.status(200).json({ message: 'Avaliação excluída com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao excluir avaliação' });
  }
};
