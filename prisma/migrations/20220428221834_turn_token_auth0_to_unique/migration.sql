/*
  Warnings:

  - A unique constraint covering the columns `[tokenAuth0]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_tokenAuth0_key" ON "User"("tokenAuth0");
