import { Request, Response } from 'express';
import { Alunos } from '../models/Alunos';
import { alunoService } from '../services/alunosService';

export const criarAluno = async (req: Request, res: Response) => {
  try {
    const novoAluno: Alunos = req.body;
    const aluno = await alunoService.criarAluno(novoAluno);
    res.status(201).json({ aluno });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar aluno' });
  }
};

export const obterTodosAlunos = async (req: Request, res: Response) => {
  try {
    const alunos = await alunoService.obterTodosAlunos();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter alunos' });
  }
};


export const obterAluno = async (req: Request, res: Response) => {
  try {
    const matricula = parseInt(req.params.matricula, 10);
    const aluno = await alunoService.obterAluno(matricula);
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter aluno' });
  }
};

export const atualizarAluno = async (req: Request, res: Response) => {
  try {
    const matricula = parseInt(req.params.matricula, 10);
    const dadosAtualizados: Alunos = req.body;
    const alunoAtualizado = await alunoService.atualizarAluno(matricula, dadosAtualizados);

    if (alunoAtualizado) {
      res.json({ aluno: alunoAtualizado });
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
};

export const excluirAluno = async (req: Request, res: Response) => {
  try {
    const matricula = parseInt(req.params.matricula, 10);
    await alunoService.excluirAluno(matricula);
    res.json({ message: 'Aluno excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir aluno' });
  }
};
