-- CreateTable
CREATE TABLE "Sku" (
    "sku" TEXT NOT NULL PRIMARY KEY,
    "descricao" TEXT NOT NULL,
    "codean" TEXT,
    "coddum" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Sku_descricao_key" ON "Sku"("descricao");
