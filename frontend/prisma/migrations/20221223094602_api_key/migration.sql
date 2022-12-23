-- CreateTable
CREATE TABLE "ApiKey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "apiKey" TEXT NOT NULL,
    CONSTRAINT "ApiKey_apiKey_fkey" FOREIGN KEY ("apiKey") REFERENCES "User" ("apiKey") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "apiKey" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "name") SELECT "email", "emailVerified", "id", "image", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_apiKey_key" ON "User"("apiKey");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_apiKey_key" ON "ApiKey"("apiKey");
