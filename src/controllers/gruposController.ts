import { Request, Response } from 'express';
import { Grupos } from '../models/Grupos';
import { grupoService } from '../services/gruposService';

export const criarGrupo = async (req: Request, res: Response): Promise<void> => {
  try {
    const novoGrupo: Grupos = req.body;
    const grupo = await grupoService.criarGrupo(novoGrupo);
    res.status(201).json({ grupo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar grupo' });
  }
};

export const obterTodosGrupos = async (req: Request, res: Response): Promise<void> => {
  try {
    const grupos = await grupoService.obterTodosGrupos();
    res.status(200).json({ grupos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao obter grupos' });
  }
};


export const obterGrupo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nomeGrupo } = req.params;
    const grupo = await grupoService.obterGrupo(nomeGrupo);

    if (grupo) {
      res.status(200).json({ grupo });
    } else {
      res.status(404).json({ erro: 'Grupo não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao obter grupo' });
  }
};

export const atualizarGrupo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nomeGrupo } = req.params;
    const dadosAtualizados: Grupos = req.body;
    const grupoAtualizado = await grupoService.atualizarGrupo(nomeGrupo, dadosAtualizados);

    if (grupoAtualizado) {
      res.status(200).json({ grupo: grupoAtualizado });
    } else {
      res.status(404).json({ erro: 'Grupo não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar grupo' });
  }
};

export const excluirGrupo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nomeGrupo } = req.params;
    await grupoService.excluirGrupo(nomeGrupo);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao excluir grupo' });
  }
};
