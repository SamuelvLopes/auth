-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "callback" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Method" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientMethod" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "methodId" INTEGER NOT NULL,

    CONSTRAINT "ClientMethod_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClientMethod" ADD CONSTRAINT "ClientMethod_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientMethod" ADD CONSTRAINT "ClientMethod_methodId_fkey" FOREIGN KEY ("methodId") REFERENCES "Method"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
