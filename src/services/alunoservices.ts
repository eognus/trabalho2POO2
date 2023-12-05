import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class AlunoServices{
    constructor(){}

    async listAluno(matricula?: string){
        try{
            if (matricula){
                const aluno = await prisma.aluno.findUnique({
                    where:{
                        matricula
                    }
                });return aluno
            }
            else{
                const alunos = await prisma.aluno.findMany();
                return alunos
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async createAluno(aluno: Prisma.AlunoCreateInput){
        try{
            const newAluno = await prisma.aluno.create({
                data: aluno
            });
            return newAluno
        }catch(error){
            console.log(error)
            return null
        }
    }

    async updateAluno(matricula: string, aluno: Prisma.AlunoUpdateInput){
        try{
            const updatedAluno = await prisma.aluno.update({
                where:{
                    matricula
                },
                data:aluno
            });return updatedAluno
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deleteAluno(matricula: string){
        try{
            const deletedAluno = await prisma.aluno.delete({
                where:{
                    matricula
                }
            });return deletedAluno
        }catch(error){
            console.log(error)
            return null
        }
    }
  
};


export default new AlunoServices();