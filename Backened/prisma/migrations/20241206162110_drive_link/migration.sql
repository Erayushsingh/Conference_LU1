/*
  Warnings:

  - You are about to drop the column `abstract` on the `AbstractForm` table. All the data in the column will be lost.
  - Added the required column `drivelink` to the `AbstractForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AbstractForm" DROP COLUMN "abstract",
ADD COLUMN     "drivelink" TEXT NOT NULL;
