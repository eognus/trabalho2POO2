/*
  Warnings:

  - You are about to drop the `Aluno` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AlunoToGrupos` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `numeroAvaliacao` on the `Avaliacao` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Estande` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `numeroEstande` on the `Estande` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `idUvv` on the `Professor` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `estandeNumeroEstande` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matriculaAlunos` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorIdUvv` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numEstd` to the `Grupos` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Aluno_nome_key";

-- DropIndex
DROP INDEX "_AlunoToGrupos_B_index";

-- DropIndex
DROP INDEX "_AlunoToGrupos_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Aluno";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_AlunoToGrupos";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Alunos" (
    "matricula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AlunosToGrupos" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AlunosToGrupos_A_fkey" FOREIGN KEY ("A") REFERENCES "Alunos" ("matricula") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlunosToGrupos_B_fkey" FOREIGN KEY ("B") REFERENCES "Grupos" ("nomeGrupo") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_EstandeToGrupos" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_EstandeToGrupos_A_fkey" FOREIGN KEY ("A") REFERENCES "Estande" ("numeroEstande") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EstandeToGrupos_B_fkey" FOREIGN KEY ("B") REFERENCES "Grupos" ("nomeGrupo") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "numeroAvaliacao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nota" REAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "professorIdUvv" INTEGER NOT NULL,
    "estandeNumeroEstande" INTEGER NOT NULL,
    "matriculaAlunos" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_professorIdUvv_fkey" FOREIGN KEY ("professorIdUvv") REFERENCES "Professor" ("idUvv") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_estandeNumeroEstande_fkey" FOREIGN KEY ("estandeNumeroEstande") REFERENCES "Estande" ("numeroEstande") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_matriculaAlunos_fkey" FOREIGN KEY ("matriculaAlunos") REFERENCES "Alunos" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("comentario", "nota", "numeroAvaliacao") SELECT "comentario", "nota", "numeroAvaliacao" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE UNIQUE INDEX "Avaliacao_estandeNumeroEstande_key" ON "Avaliacao"("estandeNumeroEstande");
CREATE INDEX "idx_professorIdUvv" ON "Avaliacao"("professorIdUvv");
CREATE INDEX "idx_estandeNumeroEstande" ON "Avaliacao"("estandeNumeroEstande");
CREATE INDEX "idx_matriculaAlunos" ON "Avaliacao"("matriculaAlunos");
CREATE TABLE "new_Estande" (
    "numeroEstande" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataHora" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Estande" ("dataHora", "numeroEstande") SELECT "dataHora", "numeroEstande" FROM "Estande";
DROP TABLE "Estande";
ALTER TABLE "new_Estande" RENAME TO "Estande";
CREATE UNIQUE INDEX "Estande_numeroEstande_key" ON "Estande"("numeroEstande");
CREATE TABLE "new_Grupos" (
    "nomeGrupo" TEXT NOT NULL PRIMARY KEY,
    "numEstd" INTEGER NOT NULL
);
INSERT INTO "new_Grupos" ("nomeGrupo") SELECT "nomeGrupo" FROM "Grupos";
DROP TABLE "Grupos";
ALTER TABLE "new_Grupos" RENAME TO "Grupos";
CREATE TABLE "new_Professor" (
    "idUvv" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("idUvv", "nome") SELECT "idUvv", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE UNIQUE INDEX "Professor_idUvv_key" ON "Professor"("idUvv");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Alunos_matricula_key" ON "Alunos"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "_AlunosToGrupos_AB_unique" ON "_AlunosToGrupos"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunosToGrupos_B_index" ON "_AlunosToGrupos"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EstandeToGrupos_AB_unique" ON "_EstandeToGrupos"("A", "B");

-- CreateIndex
CREATE INDEX "_EstandeToGrupos_B_index" ON "_EstandeToGrupos"("B");
