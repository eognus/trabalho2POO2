/*
  Warnings:

  - You are about to drop the column `data` on the `Estande` table. All the data in the column will be lost.
  - The primary key for the `Criterios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Criterios` table. All the data in the column will be lost.
  - Added the required column `titulo` to the `Estande` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Estande" (
    "numeroEstande" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataHora" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "titulo" TEXT NOT NULL
);
INSERT INTO "new_Estande" ("numeroEstande") SELECT "numeroEstande" FROM "Estande";
DROP TABLE "Estande";
ALTER TABLE "new_Estande" RENAME TO "Estande";
CREATE UNIQUE INDEX "Estande_numeroEstande_key" ON "Estande"("numeroEstande");
CREATE TABLE "new_Criterios" (
    "descricao" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_Criterios" ("descricao") SELECT "descricao" FROM "Criterios";
DROP TABLE "Criterios";
ALTER TABLE "new_Criterios" RENAME TO "Criterios";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
