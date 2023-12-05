import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import GrupoServices from "../services/gruposervices";

class GrupoController{

    constructor(){}

    async createGrupo(req: Request, res: Response){
        const dados: Prisma.GrupoCreateInput = req.body;
        
        if(dados.nome !== ""){
            const newGrupo = await GrupoServices.createGrupo(dados)
            res.status(200).json({
                status: 'ok',
                newGrupo: newGrupo
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listGrupo(req: Request, res: Response){
        const grupos = await GrupoServices.listGrupo();

        res.render('grupos', { grupos: grupos })
    }
    

    async updateGrupo(req: Request, res: Response){
        const grupo = GrupoServices.updateGrupo = req.body;
        const dados: Prisma.GrupoUpdateInput = req.body;


        if(dados.nome !== ""){
            const updatedGrupo = await GrupoServices.updateGrupo(grupo.nome, dados)
            res.status(200).json({
                status: 'ok',
                updatedGrupo: updatedGrupo
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deleteGrupo(req: Request, res: Response){
        const grupo = GrupoServices.deleteGrupo = req.body;

        if(grupo.nome !== ""){
            const deletedGrupo = await GrupoServices.deleteGrupo(grupo.nome)
            res.status(200).json({
                status: 'ok',
                deletedGrupo: deletedGrupo
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new GrupoController();