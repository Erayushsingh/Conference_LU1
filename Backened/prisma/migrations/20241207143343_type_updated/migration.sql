/*
  Warnings:

  - The values [yes,no] on the enum `accomodation` will be removed. If these variants are still used in the database, this will fail.
  - The values [yes,no] on the enum `interestedPresenting` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "accomodation_new" AS ENUM ('Yes', 'No');
ALTER TABLE "User" ALTER COLUMN "accommodation" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "accommodation" TYPE "accomodation_new" USING ("accommodation"::text::"accomodation_new");
ALTER TYPE "accomodation" RENAME TO "accomodation_old";
ALTER TYPE "accomodation_new" RENAME TO "accomodation";
DROP TYPE "accomodation_old";
ALTER TABLE "User" ALTER COLUMN "accommodation" SET DEFAULT 'No';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "interestedPresenting_new" AS ENUM ('Yes', 'No');
ALTER TABLE "User" ALTER COLUMN "interestedInPresentation" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "interestedInPresentation" TYPE "interestedPresenting_new" USING ("interestedInPresentation"::text::"interestedPresenting_new");
ALTER TYPE "interestedPresenting" RENAME TO "interestedPresenting_old";
ALTER TYPE "interestedPresenting_new" RENAME TO "interestedPresenting";
DROP TYPE "interestedPresenting_old";
ALTER TABLE "User" ALTER COLUMN "interestedInPresentation" SET DEFAULT 'No';
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "accommodation" SET DEFAULT 'No',
ALTER COLUMN "interestedInPresentation" SET DEFAULT 'No';
