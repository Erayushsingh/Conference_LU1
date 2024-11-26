/*
  Warnings:

  - You are about to drop the column `author` on the `AbstractForm` table. All the data in the column will be lost.
  - Added the required column `authors` to the `AbstractForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AbstractForm" DROP COLUMN "author",
ADD COLUMN     "authors" TEXT NOT NULL;
