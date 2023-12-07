-- Active: 1696477956753@@127.0.0.1@3306
-- CreateTable
CREATE TABLE "Aluno" (
    "matricula" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "curso" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Estande" (
    "numeroEstande" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Grupos" (
    "nomeGrupo" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "idAvaliacao" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Criterios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_nome_key" ON "Aluno"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_id_key" ON "Professor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Estande_numeroEstande_key" ON "Estande"("numeroEstande");
