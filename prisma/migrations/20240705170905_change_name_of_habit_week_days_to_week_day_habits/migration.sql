/*
  Warnings:

  - You are about to drop the `habit_week_days` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "habit_week_days" DROP CONSTRAINT "habit_week_days_habit_id_fkey";

-- DropForeignKey
ALTER TABLE "habit_week_days" DROP CONSTRAINT "habit_week_days_userId_fkey";

-- DropTable
DROP TABLE "habit_week_days";

-- CreateTable
CREATE TABLE "week_day_habits" (
    "id" TEXT NOT NULL,
    "habit_id" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "week_day_habits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "week_day_habits_habit_id_week_day_userId_key" ON "week_day_habits"("habit_id", "week_day", "userId");

-- AddForeignKey
ALTER TABLE "week_day_habits" ADD CONSTRAINT "week_day_habits_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "habits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "week_day_habits" ADD CONSTRAINT "week_day_habits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PrismaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
