import { PrismaClient, Professor as PrismaProfessor } from '@prisma/client';
import { Professor } from '../models/Professor';

const prisma = new PrismaClient();

export const professorService = {
  criarProfessor: async (novoProfessor: Professor): Promise<Professor> => {
    const professorCriado = await prisma.professor.create({ data: novoProfessor as PrismaProfessor });
    return professorCriado as Professor;
  },

  obterTodosProfessores: async (): Promise<Professor[]> => {
    const todosProfessores = await prisma.professor.findMany();
    return todosProfessores as Professor[];
  },


  obterProfessor: async (idUvv: number): Promise<Professor | null> => {
    const professor = await prisma.professor.findUnique({
      where: {
        idUvv,
      },
    });

    return professor as Professor | null;
  },

  atualizarProfessor: async (idUvv: number, dadosAtualizados: Professor): Promise<Professor | null> => {
    const professorAtualizado = await prisma.professor.update({
      where: {
        idUvv,
      },
      data: dadosAtualizados as PrismaProfessor,
    });

    return professorAtualizado as Professor | null;
  },

  excluirProfessor: async (idUvv: number): Promise<void> => {
    await prisma.professor.delete({
      where: {
        idUvv,
      },
    });
  },
};
