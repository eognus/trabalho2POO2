import { Avaliacao, Grupos } from "@prisma/client";

export interface Estande {
  numeroEstande: number;
  dataHora: Date;
  avaliacao?: Avaliacao | null;
  grupo: Grupos[];
}