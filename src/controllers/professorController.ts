import { Request, Response } from 'express';
import { Professor } from '../models/Professor';
import { professorService } from '../services/professorService';

export const criarProfessor = async (req: Request, res: Response): Promise<void> => {
  try {
    const novoProfessor: Professor = req.body;
    const professor = await professorService.criarProfessor(novoProfessor);
    res.status(201).json({ professor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar professor' });
  }
};

export const obterTodosProfessores = async (req: Request, res: Response): Promise<void> => {
  try {
    const professores = await professorService.obterTodosProfessores();
    res.status(200).json({ professores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao obter professores' });
  }
};


export const obterProfessor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { idUvv } = req.params;
    const professor = await professorService.obterProfessor(parseInt(idUvv, 10));

    if (professor) {
      res.status(200).json({ professor });
    } else {
      res.status(404).json({ erro: 'Professor não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao obter professor' });
  }
};

export const atualizarProfessor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { idUvv } = req.params;
    const dadosAtualizados: Professor = req.body;
    const professorAtualizado = await professorService.atualizarProfessor(parseInt(idUvv, 10), dadosAtualizados);

    if (professorAtualizado) {
      res.status(200).json({ professor: professorAtualizado });
    } else {
      res.status(404).json({ erro: 'Professor não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar professor' });
  }
};

export const excluirProfessor = async (req: Request, res: Response): Promise<void> => {
  try {
    const { idUvv } = req.params;
    await professorService.excluirProfessor(parseInt(idUvv, 10));
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao excluir professor' });
  }
};
