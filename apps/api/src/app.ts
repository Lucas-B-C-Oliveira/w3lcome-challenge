import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from '@prisma/client'

export const app = express();
app.use(cors({ origin: true }))
app.use(express.json());

const prisma = new PrismaClient()

prisma.task.createMany({
  data: [
    {
      title: "Learn React",
      done: true,
    },
    {
      title: "Study NodeJS",
      done: false,
    },
    {
      title: "Pratice Typescript",
      done: false,
    },
  ]
})

