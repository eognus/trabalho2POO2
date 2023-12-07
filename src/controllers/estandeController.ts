import { Request, Response } from 'express';
import { Estande } from '../models/Estande';
import { estandeService } from '../services/estandeService';

export const criarEstande = async (req: Request, res: Response) => {
  try {
    const novoEstande: Estande = req.body;
    const estande = await estandeService.criarEstande(novoEstande);
    res.status(201).json({ estande });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar estande' });
  }
};

export const obterTodosEstandes = async (req: Request, res: Response) => {
  try {
    const estandes = await estandeService.obterTodosEstandes();
    res.json(estandes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter estandes' });
  }
};


export const obterEstande = async (req: Request, res: Response) => {
  try {
    const numeroEstande = parseInt(req.params.numeroEstande, 10);
    const estande = await estandeService.obterEstande(numeroEstande);
    res.json(estande);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter estande' });
  }
};

export const atualizarEstande = async (req: Request, res: Response) => {
  try {
    const numeroEstande = parseInt(req.params.numeroEstande, 10);
    const dadosAtualizados: Estande = req.body;
    const estandeAtualizado = await estandeService.atualizarEstande(numeroEstande, dadosAtualizados);

    if (estandeAtualizado) {
      res.json({ estande: estandeAtualizado });
    } else {
      res.status(404).json({ error: 'Estande não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar estande' });
  }
};

export const excluirEstande = async (req: Request, res: Response) => {
  try {
    const numeroEstande = parseInt(req.params.numeroEstande, 10);
    await estandeService.excluirEstande(numeroEstande);
    res.json({ message: 'Estande excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir estande' });
  }
};
