/*
  Warnings:

  - You are about to drop the `Criterios` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Estande` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `titulo` on the `Estande` table. All the data in the column will be lost.
  - The primary key for the `Grupos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Assunto` on the `Grupos` table. All the data in the column will be lost.
  - You are about to drop the column `Integrantes` on the `Grupos` table. All the data in the column will be lost.
  - You are about to drop the column `curso` on the `Aluno` table. All the data in the column will be lost.
  - The primary key for the `Professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `comentario` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomeGrupo` to the `Grupos` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Criterios";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_AlunoToGrupos" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AlunoToGrupos_A_fkey" FOREIGN KEY ("A") REFERENCES "Aluno" ("matricula") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlunoToGrupos_B_fkey" FOREIGN KEY ("B") REFERENCES "Grupos" ("nomeGrupo") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "numeroAvaliacao" TEXT NOT NULL PRIMARY KEY,
    "nota" REAL NOT NULL,
    "comentario" TEXT NOT NULL,
    CONSTRAINT "Avaliacao_numeroAvaliacao_fkey" FOREIGN KEY ("numeroAvaliacao") REFERENCES "Estande" ("numeroEstande") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("numeroAvaliacao") SELECT "numeroAvaliacao" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE TABLE "new_Estande" (
    "numeroEstande" TEXT NOT NULL PRIMARY KEY,
    "dataHora" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Estande" ("dataHora", "numeroEstande") SELECT "dataHora", "numeroEstande" FROM "Estande";
DROP TABLE "Estande";
ALTER TABLE "new_Estande" RENAME TO "Estande";
CREATE UNIQUE INDEX "Estande_numeroEstande_key" ON "Estande"("numeroEstande");
CREATE TABLE "new_Grupos" (
    "nomeGrupo" TEXT NOT NULL PRIMARY KEY
);
DROP TABLE "Grupos";
ALTER TABLE "new_Grupos" RENAME TO "Grupos";
CREATE TABLE "new_Aluno" (
    "matricula" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Aluno" ("matricula", "nome") SELECT "matricula", "nome" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
CREATE UNIQUE INDEX "Aluno_nome_key" ON "Aluno"("nome");
CREATE TABLE "new_Professor" (
    "idUvv" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("idUvv", "nome") SELECT "idUvv", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE UNIQUE INDEX "Professor_idUvv_key" ON "Professor"("idUvv");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoToGrupos_AB_unique" ON "_AlunoToGrupos"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoToGrupos_B_index" ON "_AlunoToGrupos"("B");
