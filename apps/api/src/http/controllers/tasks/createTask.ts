import { TaskAlreadyExistsError } from "@/use-cases/errors/task-already-exists";
import { makeCreateTaskUseCase } from "@/use-cases/factories/make-create-task-use-case";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export async function createTask(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const createTaskBodySchema = z.object({
    title: z.string(),
  })

  const { title } = createTaskBodySchema.parse(req.body)
  const done = false

  try {
    const createTask = makeCreateTaskUseCase();

    const { task } = await createTask.execute({
      data: {
        done,
        title,
      }
    });

    res.status(201).send(task);
  } catch (error: any) {
    if (error instanceof TaskAlreadyExistsError) {
      res.status(409).send({ message: error?.message })
    }
    console.log("error", error);
    next(error);
  }
};
