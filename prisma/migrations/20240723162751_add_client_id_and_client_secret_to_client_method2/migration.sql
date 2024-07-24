/*
  Warnings:

  - You are about to drop the column `clientID` on the `ClientMethod` table. All the data in the column will be lost.
  - You are about to drop the column `clientSecret` on the `ClientMethod` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClientMethod" DROP COLUMN "clientID",
DROP COLUMN "clientSecret",
ADD COLUMN     "OauthclientID" TEXT,
ADD COLUMN     "OauthclientSecret" TEXT;
