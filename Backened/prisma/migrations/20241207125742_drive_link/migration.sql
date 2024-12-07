-- CreateEnum
CREATE TYPE "accomodation" AS ENUM ('yes', 'no');

-- CreateEnum
CREATE TYPE "interestedPresenting" AS ENUM ('yes', 'no');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accommodation" "accomodation" NOT NULL DEFAULT 'no',
ADD COLUMN     "interestedInPresentation" "interestedPresenting" NOT NULL DEFAULT 'no';
