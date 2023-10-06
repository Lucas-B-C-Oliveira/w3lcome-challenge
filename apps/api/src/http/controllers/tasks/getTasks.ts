import { makeGetTaskUseCase } from "@/use-cases/factories/make-get-tasks-use-case";
import { Request, Response, NextFunction } from "express";

const LIMIT_DEFAULT = 10;
const OFFSET_DEFAULT = 0;

export async function getTasks(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body;

    const limit = body?.limit ?? LIMIT_DEFAULT;
    const offset = body?.offset ?? OFFSET_DEFAULT;

    const getTasks = makeGetTaskUseCase();

    const { tasks } = await getTasks.execute({
      limit,
      offset
    });

    res.status(200).send(tasks);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
