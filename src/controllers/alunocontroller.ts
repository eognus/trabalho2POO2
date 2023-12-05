import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import AlunoServices from "../services/alunoservices";

class AlunoController{

    constructor(){}

    async createAluno(req: Request, res: Response){
        const dados: Prisma.AlunoCreateInput = req.body;
        
        if(dados.email !== "" && dados.nomeAluno !== ""){
            const newAluno = await AlunoServices.createAluno(dados)
            res.status(200).json({
                status: 'ok',
                newAluno: newAluno
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listAluno(req: Request, res: Response){
        const alunos = await AlunoServices.listAluno();

        res.render('alunos', { alunos: alunos })
    }
    

    async updateAluno(req: Request, res: Response){
        const aluno = AlunoServices.updateAluno = req.body;
        const dados: Prisma.AlunoUpdateInput = req.body;


        if(dados.email !== "" && dados.nomeAluno !== "" && dados.matricula){
            const updatedAluno = await AlunoServices.updateAluno(aluno.matricula, dados)
            res.status(200).json({
                status: 'ok',
                updatedAluno: updatedAluno
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deleteAluno(req: Request, res: Response){
        const aluno = AlunoServices.deleteAluno = req.body;

        if(aluno.matricula !== ""){
            const deletedAluno = await AlunoServices.deleteAluno(aluno.matricula)
            res.status(200).json({
                status: 'ok',
                deletedAluno: deletedAluno
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new AlunoController();