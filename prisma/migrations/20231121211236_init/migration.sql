/*
  Warnings:

  - You are about to drop the column `coddum` on the `Sku` table. All the data in the column will be lost.
  - You are about to drop the column `codean` on the `Sku` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "descricao" TEXT,
    "skuId" TEXT NOT NULL,
    CONSTRAINT "Category_skuId_fkey" FOREIGN KEY ("skuId") REFERENCES "Sku" ("sku") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Price" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skuId" TEXT,
    "price" TEXT NOT NULL,
    CONSTRAINT "Price_skuId_fkey" FOREIGN KEY ("skuId") REFERENCES "Sku" ("sku") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sku" (
    "sku" TEXT NOT NULL PRIMARY KEY,
    "descricao" TEXT NOT NULL,
    "ean" TEXT,
    "dum" TEXT,
    "unPerBox" INTEGER,
    "boxPerPallet" INTEGER,
    "boxPerLatro" INTEGER,
    "latroPerPallet" INTEGER,
    "shelf" INTEGER,
    "weightPerBox" REAL,
    "weightPerUnit" REAL,
    "boxHeight" REAL,
    "boxLength" REAL,
    "boxWidth" REAL
);
INSERT INTO "new_Sku" ("descricao", "sku") SELECT "descricao", "sku" FROM "Sku";
DROP TABLE "Sku";
ALTER TABLE "new_Sku" RENAME TO "Sku";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Price_skuId_key" ON "Price"("skuId");
