import { Alunos,Estande } from "@prisma/client";

export interface Grupos{
    nomeGrupo: string;
    numEstd: number;
    alunos: Alunos[];
    estande: Estande[];
}