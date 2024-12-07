/*
  Warnings:

  - You are about to drop the column `file` on the `AbstractForm` table. All the data in the column will be lost.
  - Added the required column `fileData` to the `AbstractForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AbstractForm" DROP COLUMN "file",
ADD COLUMN     "fileData" BYTEA NOT NULL;
