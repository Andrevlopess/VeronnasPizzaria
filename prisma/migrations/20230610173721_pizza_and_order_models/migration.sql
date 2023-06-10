-- CreateTable
CREATE TABLE "Pizza" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "borderType" TEXT NOT NULL,
    "sauceType" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "costumerId" TEXT NOT NULL,
    "message" TEXT,
    "price" INTEGER NOT NULL,
    CONSTRAINT "Pizza_costumerId_fkey" FOREIGN KEY ("costumerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pizzaId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Orders_pizzaId_fkey" FOREIGN KEY ("pizzaId") REFERENCES "Pizza" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Pizza_costumerId_key" ON "Pizza"("costumerId");
