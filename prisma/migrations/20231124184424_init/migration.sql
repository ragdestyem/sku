-- CreateTable
CREATE TABLE "Product" (
    "sku" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ean" TEXT,
    "dum" TEXT,
    "unPerBox" INTEGER,
    "boxPerPallet" INTEGER,
    "boxPerLatro" INTEGER,
    "latroPerPallet" INTEGER,
    "shelf" INTEGER,
    "weightPerBox" DOUBLE PRECISION,
    "weightPerUnit" DOUBLE PRECISION,
    "boxHeight" DOUBLE PRECISION,
    "boxLength" DOUBLE PRECISION,
    "boxWidth" DOUBLE PRECISION,
    "categoryId" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("sku")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" SERIAL NOT NULL,
    "skuId" TEXT,
    "price" TEXT NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Price_skuId_key" ON "Price"("skuId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_skuId_fkey" FOREIGN KEY ("skuId") REFERENCES "Product"("sku") ON DELETE SET NULL ON UPDATE CASCADE;
