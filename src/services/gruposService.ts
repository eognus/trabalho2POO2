import { PrismaClient, Grupos as PrismaGrupos } from '@prisma/client';
import { Grupos } from '../models/Grupos';

const prisma = new PrismaClient();

export const grupoService = {
  criarGrupo: async (novoGrupo: Grupos): Promise<Grupos> => {
    const grupoCriado = await prisma.grupos.create({ data: novoGrupo as PrismaGrupos });
    return grupoCriado as Grupos;
  },

 obterTodosGrupos: async (): Promise<Grupos[]> => {
    const todosGrupos = await prisma.grupos.findMany();
    return todosGrupos as Grupos[];
  },
  


  obterGrupo: async (nomeGrupo: string): Promise<Grupos | null> => {
    const grupo = await prisma.grupos.findUnique({
      where: {
        nomeGrupo,
      },
    });

    return grupo as Grupos | null;
  },

  atualizarGrupo: async (nomeGrupo: string, dadosAtualizados: Grupos): Promise<Grupos | null> => {
    const grupoAtualizado = await prisma.grupos.update({
      where: {
        nomeGrupo,
      },
      data: dadosAtualizados as PrismaGrupos,
    });

    return grupoAtualizado as Grupos | null;
  },

  excluirGrupo: async (nomeGrupo: string): Promise<void> => {
    await prisma.grupos.delete({
      where: {
        nomeGrupo,
      },
    });
  },
};
