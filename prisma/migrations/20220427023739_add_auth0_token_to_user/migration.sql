/*
  Warnings:

  - Added the required column `tokenAuth0` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tokenAuth0" TEXT NOT NULL;
