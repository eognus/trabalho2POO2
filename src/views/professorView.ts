import { Professor } from '../models/Professor';

export const renderizarProfessorHTML = (professor: Professor): string => {
  const avaliacoesHTML = professor.avaliacao?.map(
    avaliacao => `<li>Número: ${avaliacao.numeroAvaliacao}, Nota: ${avaliacao.nota}, Comentário: ${avaliacao.comentario}</li>`
  ).join('');

  return `
    <div>
      <h2>Professor</h2>
      <ul>
        <li>ID UVV: ${professor.idUvv}</li>
        <li>Nome: ${professor.nome}</li>
        <li>Avaliações:
          <ul>${avaliacoesHTML}</ul>
        </li>
      </ul>
    </div>
  `;
};

export const renderizarProfessoresHTML = (professores: Professor[]): string => {
  const professoresHTML = professores.map(professor => renderizarProfessorHTML(professor)).join('');

  return `
    <div>
      <h2>Lista de Professores</h2>
      ${professoresHTML}
    </div>
  `;
};