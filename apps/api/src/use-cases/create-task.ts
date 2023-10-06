import { Prisma, Task } from '@prisma/client'
import { TaskAlreadyExistsError } from '@/use-cases/errors/task-already-exists'
import { TasksRepository } from '@/repositories/tasks-repository'

interface CreateTaskUseCaseRequest {
  data: Prisma.TaskCreateInput
}

interface CreateTaskUseCaseResponse {
  task: Task
}

export class CreateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) { }

  async execute({
    data
  }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
    const task = await this.tasksRepository.create(data)

    if (!task) {
      throw new TaskAlreadyExistsError()
    }

    return {
      task,
    }
  }
}