import { Avaliacao,Grupos } from "@prisma/client";

export interface Alunos {
    nome: string;
    matricula: number;
    avaliacao?: Avaliacao[];
    grupo?: Grupos[];

}