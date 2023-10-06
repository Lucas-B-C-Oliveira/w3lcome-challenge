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
    const query = req.query;

    const limitParam = query?.limit ?? LIMIT_DEFAULT;
    const offsetParam = query?.offset ?? OFFSET_DEFAULT;

    const limit = Number(limitParam)
    const offset = Number(offsetParam);

    const getTasks = makeGetTaskUseCase();

    const { tasks, meta } = await getTasks.execute({
      limit,
      offset
    });

    res.status(200).send({
      tasks,
      meta
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
