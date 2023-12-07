import { PrismaClient, Alunos as PrismaAluno } from '@prisma/client';
import { Alunos } from '../models/Alunos';

const prisma = new PrismaClient();

export const alunoService = {
  criarAluno: async (novoAluno: Alunos): Promise<Alunos> => {
    const alunoCriado = await prisma.alunos.create({ data: novoAluno as PrismaAluno });
    return alunoCriado as Alunos;
  },

  obterTodosAlunos: async (): Promise<Alunos[]> => {
    const todosAlunos = await prisma.alunos.findMany();
    return todosAlunos as Alunos[];
  },
  

  obterAluno: async (matricula: number): Promise<Alunos | null> => {
    const aluno = await prisma.alunos.findUnique({
      where: {
        matricula,
      },
    });

    return aluno as Alunos | null;
  },

  atualizarAluno: async (matricula: number, dadosAtualizados: Alunos): Promise<Alunos | null> => {
    const alunoAtualizado = await prisma.alunos.update({
      where: {
        matricula,
      },
      data: dadosAtualizados as PrismaAluno,
    });

    return alunoAtualizado as Alunos | null;
  },

  excluirAluno: async (matricula: number): Promise<void> => {
    await prisma.alunos.delete({
      where: {
        matricula,
      },
    });
  },
};
