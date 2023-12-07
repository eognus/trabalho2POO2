import {Alunos} from '../models/Alunos';


export const renderizarAlunosHTML = (alunos: Alunos[]): string => {
  const alunosHTML = alunos.map(aluno => renderizarAlunoHTML(aluno)).join('');

  return `
    <div>
      <h2>Lista de Alunos</h2>
      ${alunosHTML}
    </div>
  `;
};

export const renderizarAlunoHTML = (aluno: Alunos): string => {
  const avaliacoesHTML = aluno.avaliacao?.map(
    avaliacao => `<li>Número: ${avaliacao.numeroAvaliacao}, Nota: ${avaliacao.nota}, Comentário: ${avaliacao.comentario}</li>`
  ).join('');

  const gruposHTML = aluno.grupo?.map(
    grupo => `<li>Nome do Grupo: ${grupo.nomeGrupo}, Número do Estande: ${grupo.numEstd}</li>`
  ).join('');

  return `
    <div>
      <h3>Aluno</h3>
      <ul>
        <li>Matrícula: ${aluno.matricula}</li>
        <li>Nome: ${aluno.nome}</li>
        <li>Avaliações:
          <ul>${avaliacoesHTML}</ul>
        </li>
        <li>Grupos:
          <ul>${gruposHTML}</ul>
        </li>
      </ul>
    </div>
  `;
};