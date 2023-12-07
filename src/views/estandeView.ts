import { Estande } from '../models/Estande';

export const renderizarEstandeHTML = (estande: Estande): string => {
  const avaliacaoHTML = estande.avaliacao
    ? `<li>Número: ${estande.avaliacao.numeroAvaliacao}, Nota: ${estande.avaliacao.nota}, Comentário: ${estande.avaliacao.comentario}</li>`
    : '';

  const gruposHTML = estande.grupo?.map(
    grupo => `<li>Nome do Grupo: ${grupo.nomeGrupo}, Número do Estande: ${grupo.numEstd}</li>`
  ).join('');

  return `
    <div>
      <h2>Estande</h2>
      <ul>
        <li>Número do Estande: ${estande.numeroEstande}</li>
        <li>Data e Hora: ${estande.dataHora.toISOString()}</li>
        <li>Avaliação:
          <ul>${avaliacaoHTML}</ul>
        </li>
        <li>Grupos:
          <ul>${gruposHTML}</ul>
        </li>
      </ul>
    </div>
  `;
};