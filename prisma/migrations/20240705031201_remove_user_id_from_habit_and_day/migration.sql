/*
  Warnings:

  - You are about to drop the column `userId` on the `days` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `habits` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "days" DROP CONSTRAINT "days_userId_fkey";

-- DropForeignKey
ALTER TABLE "habits" DROP CONSTRAINT "habits_userId_fkey";

-- AlterTable
ALTER TABLE "days" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "habits" DROP COLUMN "userId";
