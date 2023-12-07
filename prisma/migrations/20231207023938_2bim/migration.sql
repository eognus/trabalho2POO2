-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "numeroAvaliacao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nota" REAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "professorIdUvv" INTEGER,
    "estandeNumeroEstande" INTEGER NOT NULL,
    "matriculaAlunos" INTEGER,
    CONSTRAINT "Avaliacao_professorIdUvv_fkey" FOREIGN KEY ("professorIdUvv") REFERENCES "Professor" ("idUvv") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_estandeNumeroEstande_fkey" FOREIGN KEY ("estandeNumeroEstande") REFERENCES "Estande" ("numeroEstande") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_matriculaAlunos_fkey" FOREIGN KEY ("matriculaAlunos") REFERENCES "Alunos" ("matricula") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("comentario", "estandeNumeroEstande", "matriculaAlunos", "nota", "numeroAvaliacao", "professorIdUvv") SELECT "comentario", "estandeNumeroEstande", "matriculaAlunos", "nota", "numeroAvaliacao", "professorIdUvv" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE UNIQUE INDEX "Avaliacao_estandeNumeroEstande_key" ON "Avaliacao"("estandeNumeroEstande");
CREATE INDEX "idx_professorIdUvv" ON "Avaliacao"("professorIdUvv");
CREATE INDEX "idx_estandeNumeroEstande" ON "Avaliacao"("estandeNumeroEstande");
CREATE INDEX "idx_matriculaAlunos" ON "Avaliacao"("matriculaAlunos");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
