import { Estande, Professor,Alunos } from "@prisma/client";


export interface Avaliacao {
    numeroAvaliacao: number;
    nota: number;
    comentario: string;
    professorIdUvv?: number;
    estandeNumeroEstande?: number;
    matriculaAlunos?: number;

    professor: Professor[];
    estande: Estande[];
    aluno: Alunos[];
}