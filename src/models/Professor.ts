import { Avaliacao } from "@prisma/client";

export interface Professor{
    idUvv: number;
    nome: string;
    avaliacao?: Avaliacao[];

}