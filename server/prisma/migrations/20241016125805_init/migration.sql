/*
  Warnings:

  - You are about to drop the column `productOwnderUserId` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "productOwnderUserId",
ADD COLUMN     "productOwnerUserId" INTEGER,
ALTER COLUMN "projectManagerUserId" DROP NOT NULL;
