import { Prisma, PrismaClient } from '@prisma/client'
import AlunoServices from '../services/alunoservices'
import GrupoServices from '../services/gruposervices'
import ProfessorServices from '../services/professorservices'
import AvaliacaoServices from '../services/avaliacaoservices'

const prisma = new PrismaClient()

async function main() {
    await AlunoServices.createAluno(
        {
            email: 'ricardo@gpail.com',
            matricula: '1',
            nomeAluno: 'Ricardo',
        }
    )
    await AlunoServices.createAluno(
      {
          email: 'douglas@gmail.com',
          matricula: '2',
          nomeAluno: 'Douglas',
      }
  )
    await AlunoServices.createAluno(
      {
          email: 'cleison@gmail.com',
          matricula: '3',
          nomeAluno: 'Cleison',
      }
  )
    await GrupoServices.createGrupo(
      {
        nome: "Hugo",
        lider:{
          connect:{
            matricula: "1"
          }
        }
      }
    )
    await GrupoServices.createGrupo(
      {
        nome: "Cleison",
        lider:{
          connect:{
            matricula: "2"
          }
        }
      }
    )
    await GrupoServices.createGrupo(
      {
        nome: "Lissandra",
        lider:{
          connect:{
            matricula: "3"
          }
      }
    }
    )
    await ProfessorServices.createProfessor(
      {
          email: 'dir@lube.com',
          matricula: '1',
          nome: 'Dir',
      }
  )
    await ProfessorServices.createProfessor(
      {
          email: 'blou@gmail.com',
          matricula: '2',
          nome: 'Blou',
      }
  )
    await ProfessorServices.createProfessor(
      {
          email: 'ric@gmail.com',
          matricula: '3',
          nome: 'Ric',
      }
  )
    await AvaliacaoServices.createAvaliacao(
      {
        avaliador: "Otávio",
        avaliadorProf: {
          connect: {
              matricula: "1"
          }
        },
        avaliacaoGrupo: {
          connect: {
            nome: "Doug"
          }
        },
        nota: 0.0,
        avaliadorAluno:{
          connect: {
            matricula: "1"
          }
        },

      }
      )
      await AvaliacaoServices.createAvaliacao(
        {
          avaliador: "Saulo",
          avaliadorProf: {
            connect: {
                matricula: "2"
            }
          },
          avaliacaoGrupo: {
            connect: {
              nome: "Rids"
            }
          },
          nota: 10.0,
          avaliadorAluno:{
            connect: {
              matricula: "2"
            }
          },
  
        }
        )          
        await AvaliacaoServices.createAvaliacao(
          {
            avaliador: "Ridor",
            avaliadorProf: {
              connect: {
                  matricula: "3"
              }
            },
            avaliacaoGrupo: {
              connect: {
                nome: "Lissandra"
              }
            },
            nota: 100.0,
            avaliadorAluno:{
              connect: {
                matricula: "3"
              }
            },
    
          }
          )

    }


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })