/*
  Warnings:

  - You are about to drop the `Sku` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Sku";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Product" (
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

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Price" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skuId" TEXT,
    "price" TEXT NOT NULL,
    CONSTRAINT "Price_skuId_fkey" FOREIGN KEY ("skuId") REFERENCES "Product" ("sku") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Price" ("id", "price", "skuId") SELECT "id", "price", "skuId" FROM "Price";
DROP TABLE "Price";
ALTER TABLE "new_Price" RENAME TO "Price";
CREATE UNIQUE INDEX "Price_skuId_key" ON "Price"("skuId");
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "descricao" TEXT,
    "skuId" TEXT NOT NULL,
    CONSTRAINT "Category_skuId_fkey" FOREIGN KEY ("skuId") REFERENCES "Product" ("sku") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("descricao", "id", "name", "skuId") SELECT "descricao", "id", "name", "skuId" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
