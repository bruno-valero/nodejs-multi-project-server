/*
  Warnings:

  - Added the required column `user_id` to the `days` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "days" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "days" ADD CONSTRAINT "days_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "PrismaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
