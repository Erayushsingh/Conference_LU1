/*
  Warnings:

  - The values [Yes,No] on the enum `Conflict` will be removed. If these variants are still used in the database, this will fail.
  - The values [Oral,Poster] on the enum `Type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Conflict_new" AS ENUM ('yes', 'no');
ALTER TABLE "AbstractForm" ALTER COLUMN "conflictOfInterest" TYPE "Conflict_new" USING ("conflictOfInterest"::text::"Conflict_new");
ALTER TYPE "Conflict" RENAME TO "Conflict_old";
ALTER TYPE "Conflict_new" RENAME TO "Conflict";
DROP TYPE "Conflict_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Type_new" AS ENUM ('oral', 'poster');
ALTER TABLE "AbstractForm" ALTER COLUMN "preferredPresentation" DROP DEFAULT;
ALTER TABLE "AbstractForm" ALTER COLUMN "preferredPresentation" TYPE "Type_new" USING ("preferredPresentation"::text::"Type_new");
ALTER TYPE "Type" RENAME TO "Type_old";
ALTER TYPE "Type_new" RENAME TO "Type";
DROP TYPE "Type_old";
ALTER TABLE "AbstractForm" ALTER COLUMN "preferredPresentation" SET DEFAULT 'oral';
COMMIT;

-- AlterTable
ALTER TABLE "AbstractForm" ALTER COLUMN "preferredPresentation" SET DEFAULT 'oral';
