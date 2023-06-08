-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pizzas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "borderType" TEXT NOT NULL,
    "borderFilling" TEXT,
    "sauceType" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "orderedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Pizzas_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
