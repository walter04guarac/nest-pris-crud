-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "notliked" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "aLiked" SET DEFAULT true;
