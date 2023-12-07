import { PrismaClient, Avaliacao as PrismaAvaliacao } from '@prisma/client';
import { Avaliacao } from '../models/Avaliacao';

const prisma = new PrismaClient();

export const avaliacaoService = {
  criarAvaliacao: async (novaAvaliacao: Avaliacao): Promise<Avaliacao> => {
    const avaliacaoCriada = await prisma.avaliacao.create({ data: novaAvaliacao as PrismaAvaliacao });
    return avaliacaoCriada as Avaliacao;
  },
  
  obterTodasAvaliacoes: async (): Promise<Avaliacao[]> => {
    const todasAvaliacoes = await prisma.avaliacao.findMany();
    return todasAvaliacoes as Avaliacao[];
  },
  

  obterAvaliacao: async (numeroAvaliacao: number): Promise<Avaliacao | null> => {
    const avaliacao = await prisma.avaliacao.findUnique({
      where: {
        numeroAvaliacao,
      },
    });

    return avaliacao as Avaliacao | null;
  },

  atualizarAvaliacao: async (numeroAvaliacao: number, dadosAtualizados: Avaliacao): Promise<Avaliacao | null> => {
    const avaliacaoAtualizada = await prisma.avaliacao.update({
      where: {
        numeroAvaliacao,
      },
      data: dadosAtualizados as PrismaAvaliacao,
    });

    return avaliacaoAtualizada as Avaliacao | null;
  },

  excluirAvaliacao: async (numeroAvaliacao: number): Promise<void> => {
    await prisma.avaliacao.delete({
      where: {
        numeroAvaliacao,
      },
    });
  },

  // Adicione outros métodos do CRUD conforme necessário
};
