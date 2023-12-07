import { PrismaClient, Estande as PrismaEstande } from '@prisma/client';
import { Estande } from '../models/Estande';

const prisma = new PrismaClient();

export const estandeService = {
  criarEstande: async (novoEstande: Estande): Promise<Estande> => {
    const estandeCriado = await prisma.estande.create({ data: novoEstande as PrismaEstande });
    return estandeCriado as Estande;
  },

  obterTodosEstandes: async (): Promise<Estande[]> => {
    const todosEstandes = await prisma.estande.findMany();
    return todosEstandes as Estande[];
  },
  

  obterEstande: async (numeroEstande: number): Promise<Estande | null> => {
    const estande = await prisma.estande.findUnique({
      where: {
        numeroEstande,
      },
    });

    return estande as Estande | null;
  },

  atualizarEstande: async (numeroEstande: number, dadosAtualizados: Estande): Promise<Estande | null> => {
    const estandeAtualizado = await prisma.estande.update({
      where: {
        numeroEstande,
      },
      data: dadosAtualizados as PrismaEstande,
    });

    return estandeAtualizado as Estande | null;
  },

  excluirEstande: async (numeroEstande: number): Promise<void> => {
    await prisma.estande.delete({
      where: {
        numeroEstande,
      },
    });
  },
};

