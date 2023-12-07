import { Grupos } from '../models/Grupos';

export const renderizarGrupoHTML = (grupo: Grupos): string => {
  const alunosHTML = grupo.alunos.map(aluno => `<li>${aluno.nome}</li>`).join('');

  return `
    <div>
      <h2>Grupo</h2>
      <ul>
        <li>Nome do Grupo: ${grupo.nomeGrupo}</li>
        <li>Número do Estande: ${grupo.numEstd}</li>
        <li>Alunos:
          <ul>${alunosHTML}</ul>
        </li>
      </ul>
    </div>
  `;
};

export const renderizarGruposHTML = (grupos: Grupos[]): string => {
  const gruposHTML = grupos.map(grupo => renderizarGrupoHTML(grupo)).join('');

  return `
    <div>
      <h2>Lista de Grupos</h2>
      ${gruposHTML}
    </div>
  `;
};
