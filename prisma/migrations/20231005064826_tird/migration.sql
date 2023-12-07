/*
  Warnings:

  - The primary key for the `Grupos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nomeGrupo` on the `Grupos` table. All the data in the column will be lost.
  - The primary key for the `Avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idAvaliacao` on the `Avaliacao` table. All the data in the column will be lost.
  - The primary key for the `Professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Professor` table. All the data in the column will be lost.
  - Added the required column `notaGeral` to the `Criterios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Assunto` to the `Grupos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Integrantes` to the `Grupos` table without a default value. This is not possible if the table is not empty.
  - The required column `numeroAvaliacao` was added to the `Avaliacao` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idUvv` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Criterios" (
    "descricao" TEXT NOT NULL PRIMARY KEY,
    "notaGeral" REAL NOT NULL
);
INSERT INTO "new_Criterios" ("descricao") SELECT "descricao" FROM "Criterios";
DROP TABLE "Criterios";
ALTER TABLE "new_Criterios" RENAME TO "Criterios";
CREATE TABLE "new_Grupos" (
    "Integrantes" TEXT NOT NULL PRIMARY KEY,
    "Assunto" TEXT NOT NULL
);
DROP TABLE "Grupos";
ALTER TABLE "new_Grupos" RENAME TO "Grupos";
CREATE TABLE "new_Avaliacao" (
    "numeroAvaliacao" TEXT NOT NULL PRIMARY KEY
);
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE TABLE "new_Professor" (
    "idUvv" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("nome") SELECT "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE UNIQUE INDEX "Professor_idUvv_key" ON "Professor"("idUvv");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
