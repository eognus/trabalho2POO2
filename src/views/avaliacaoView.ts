import { Avaliacao } from '../models/Avaliacao';

export const renderizarAvaliacaoHTML = (avaliacao: Avaliacao): string => {
  return `
    <div>
      <h2>Avaliação</h2>
      <ul>
        <li>Número da Avaliação: ${avaliacao.numeroAvaliacao}</li>
        <li>Nota: ${avaliacao.nota}</li>
        <li>Comentário: ${avaliacao.comentario}</li>
        <li>ID do Professor: ${avaliacao.professorIdUvv || 'N/A'}</li>
        <li>Número do Estande: ${avaliacao.estandeNumeroEstande}</li>
        <li>Matrícula do Aluno: ${avaliacao.matriculaAlunos || 'N/A'}</li>
      </ul>
    </div>
  `;
};

export const renderizarAvaliacoesHTML = (avaliacoes: Avaliacao[]): string => {
  const avaliacoesHTML = avaliacoes.map(avaliacao => renderizarAvaliacaoHTML(avaliacao)).join('');

  return `
    <div>
      <h2>Lista de Avaliações</h2>
      ${avaliacoesHTML}
    </div>
  `;
};
