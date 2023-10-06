import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeDeleteTaskUseCase } from "@/use-cases/factories/make-delete-task-use-case";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";


export async function deleteTask(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {


    const deleteTaskBodySchema = z.object({
      id: z.coerce.number()
    })

    const { id } = deleteTaskBodySchema.parse(req?.query)

    const deleteTask = makeDeleteTaskUseCase();

    const { task } = await deleteTask.execute({
      id,
    });

    res.status(200).send({
      message: `${task?.title} was deleted successfully`,
      task,
    });
  } catch (error: any) {
    if (error instanceof ResourceNotFoundError) {
      res.status(404).send({ message: error?.message })
    }
    console.log("error", error);
    next(error);
  }
};
