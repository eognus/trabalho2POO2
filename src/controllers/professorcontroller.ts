import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import ProfessorServices from "../services/professorservices";

class ProfessorController{

    constructor(){}

    async createProfessor(req: Request, res: Response){
        const dados: Prisma.ProfessorCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const newProfessor = await ProfessorServices.createProfessor(dados)
            res.status(200).json({
                status: 'ok',
                newProfessor: newProfessor
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listProfessor(req: Request, res: Response){
        const professores = await ProfessorServices.listProfessor();

        res.render('professores', { professores: professores })
    }
    

    async updateProfessor(req: Request, res: Response){
        const professor = ProfessorServices.createProfessor = req.body;
        const dados: Prisma.ProfessorUpdateInput = req.body;


        if(dados.email !== "" && dados.nome !== ""){
            const updatedProfessor = await ProfessorServices.updateProfessor(professor.matricula, dados)
            res.status(200).json({
                status: 'ok',
                updatedProfessor: updatedProfessor
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deleteProfessor(req: Request, res: Response){
        const professor = ProfessorServices.listProfessor = req.body;

        if(professor.matricula !== ""){
            const deletedProfessor = await ProfessorServices.deleteProfessor(professor.matricula)
            res.status(200).json({
                status: 'ok',
                deletedProfessor: deletedProfessor
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new ProfessorController();