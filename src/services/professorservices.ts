import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class ProfessorServices{
    constructor(){}

    async listProfessor(matricula?: string){
        try{
            if (matricula){
                const professor = await prisma.professor.findUnique({
                    where:{
                        matricula
                    }
                });return professor
            }
            else{
                const professores = await prisma.professor.findMany();
                return professores
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async createProfessor(professor: Prisma.ProfessorCreateInput){
        try{
            const newProfessor = await prisma.professor.create({
                data: professor
            });
            return newProfessor
        }catch(error){
            console.log(error)
            return null
        }
    }

    async updateProfessor(matricula: string, professor: Prisma.ProfessorUpdateInput){
        try{
            const updatedProfessor = await prisma.professor.update({
                where:{
                    matricula
                },
                data:professor
            });return updatedProfessor
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deleteProfessor(matricula: string){
        try{
            const deletedProfessor = await prisma.professor.delete({
                where:{
                    matricula
                }
            });return deletedProfessor
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new ProfessorServices();