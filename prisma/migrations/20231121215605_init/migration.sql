/*
  Warnings:

  - You are about to drop the column `skuId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "descricao" TEXT
);
INSERT INTO "new_Category" ("descricao", "id", "name") SELECT "descricao", "id", "name" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE TABLE "new_Product" (
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
    "boxWidth" REAL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("boxHeight", "boxLength", "boxPerLatro", "boxPerPallet", "boxWidth", "descricao", "dum", "ean", "latroPerPallet", "shelf", "sku", "unPerBox", "weightPerBox", "weightPerUnit") SELECT "boxHeight", "boxLength", "boxPerLatro", "boxPerPallet", "boxWidth", "descricao", "dum", "ean", "latroPerPallet", "shelf", "sku", "unPerBox", "weightPerBox", "weightPerUnit" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
