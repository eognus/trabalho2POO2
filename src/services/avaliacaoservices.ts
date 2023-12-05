import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class AvaliacaoServices{
    constructor(){}

    async listAvaliacao(avaliador?: string){
        try{
            if (avaliador){
                const avaliacao = await prisma.avaliacao.findUnique({
                    where:{
                        avaliador
                    }
                });return avaliacao
            }
            else{
                const avaliacoes = await prisma.avaliacao.findMany();
                return avaliacoes
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async createAvaliacao(avaliacao: Prisma.AvaliacaoCreateInput){
        try{
            const newAvaliacao = await prisma.avaliacao.create({
                data: avaliacao
            });
            return newAvaliacao
        }catch(error){
            console.log(error)
            return null
        }
    }

    async updateAvaliacao(avaliador: string, avaliacao: Prisma.AvaliacaoUpdateInput){
        try{
            const updatedAvaliacao = await prisma.avaliacao.update({
                where:{
                    avaliador
                },
                data:avaliacao
            });return updatedAvaliacao
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deleteAvaliacao(avaliador: string){
        try{
            const deletedAvaliacao = await prisma.avaliacao.delete({
                where:{
                    avaliador
                }
            });return deletedAvaliacao
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new AvaliacaoServices();