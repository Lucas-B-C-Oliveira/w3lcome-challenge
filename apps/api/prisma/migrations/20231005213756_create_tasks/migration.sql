-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
