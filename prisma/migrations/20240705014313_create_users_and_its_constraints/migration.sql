/*
  Warnings:

  - A unique constraint covering the columns `[habit_id,day_id,userId]` on the table `day_habits` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[habit_id,week_day,userId]` on the table `habit_week_days` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `day_habits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `habit_week_days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `habits` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "day_habits_habit_id_day_id_key";

-- DropIndex
DROP INDEX "habit_week_days_habit_id_week_day_key";

-- AlterTable
ALTER TABLE "day_habits" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "days" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "habit_week_days" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "habits" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PrismaUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT,

    CONSTRAINT "PrismaUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrismaUser_email_key" ON "PrismaUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "day_habits_habit_id_day_id_userId_key" ON "day_habits"("habit_id", "day_id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "habit_week_days_habit_id_week_day_userId_key" ON "habit_week_days"("habit_id", "week_day", "userId");

-- AddForeignKey
ALTER TABLE "habits" ADD CONSTRAINT "habits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PrismaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "days" ADD CONSTRAINT "days_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PrismaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "day_habits" ADD CONSTRAINT "day_habits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PrismaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_week_days" ADD CONSTRAINT "habit_week_days_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PrismaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
