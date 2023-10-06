import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeUpdateTaskUseCase } from "@/use-cases/factories/make-update-task-use-case";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";


export async function updateTask(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {

    const updateTaskBodySchema = z.object({
      id: z.number(),
      done: z.boolean()
    })

    const { id, done } = updateTaskBodySchema.parse(req.body)

    const updateTask = makeUpdateTaskUseCase();

    const { task } = await updateTask.execute({
      id,
      done,
    });

    res.status(201).send(task);
  } catch (error: any) {
    if (error instanceof ResourceNotFoundError) {
      res.status(404).send({ message: error?.message })
    }
    console.log("error", error);
    next(error);
  }
};
