import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import AvaliacaoServices from "../services/avaliacaoservices";

class AvaliacaoController{

    constructor(){}

    async createAvaliacao(req: Request, res: Response){
        const dados: Prisma.AvaliacaoCreateInput = req.body;
        
        if(dados.avaliador !== "" && dados.nota !== null){
            const newAvaliacao = await AvaliacaoServices.createAvaliacao(dados)
            res.status(200).json({
                status: 'ok',
                newAvaliacao: newAvaliacao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listAvaliacao(req: Request, res: Response){
        const avaliacoes = await AvaliacaoServices.listAvaliacao();

        res.render('avaliacoes', { avaliacoes: avaliacoes })
    }
    

    async updateAvaliacao(req: Request, res: Response){
        const avaliacao = AvaliacaoServices.updateAvaliacao = req.body;
        const dados: Prisma.AvaliacaoUpdateInput = req.body;


        if(dados.avaliador !== "" && dados.nota !== null){
            const updatedAvaliacao = await AvaliacaoServices.updateAvaliacao(avaliacao.avaliador, dados)
            res.status(200).json({
                status: 'ok',
                updatedAvaliacao: updatedAvaliacao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deleteAvaliacao(req: Request, res: Response){
        const avaliacao = AvaliacaoServices.deleteAvaliacao = req.body;

        if(avaliacao.avaliador !== ""){
            const deletedAvaliacao = await AvaliacaoServices.deleteAvaliacao(avaliacao.avaliador)
            res.status(200).json({
                status: 'ok',
                deletedAvaliacao: deletedAvaliacao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new AvaliacaoController();