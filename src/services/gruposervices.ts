import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class GrupoServices{
    constructor(){}

    async listGrupo(nome?: string){
        try{
            if (nome){
                const grupo = await prisma.grupo.findUnique({
                    where:{
                        nome
                    }
                });return grupo
            }
            else{
                const grupos = await prisma.grupo.findMany();
                return grupos
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async createGrupo(grupo: Prisma.GrupoCreateInput){
        try{
            const newGrupo = await prisma.grupo.create({
                data: grupo
            });
            return newGrupo
        }catch(error){
            console.log(error)
            return null
        }
    }

    async updateGrupo(nome: string, grupo: Prisma.GrupoUpdateInput){
        try{
            const updatedGrupo = await prisma.grupo.update({
                where:{
                    nome
                },
                data:grupo
            });return updatedGrupo
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deleteGrupo(nome: string){
        try{
            const deletedGrupo = await prisma.grupo.delete({
                where:{
                    nome
                }
            });return deletedGrupo
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new GrupoServices();