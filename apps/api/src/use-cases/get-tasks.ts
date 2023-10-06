import { Task } from '@prisma/client'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { TasksRepository } from '@/repositories/tasks-repository'

interface GetTasksUseCaseRequest {
  limit: number
  offset: number
}

interface GetTasksUseCaseResponse {
  tasks: Task[]
}

export class GetTasksUseCase {
  constructor(private tasksRepository: TasksRepository) { }

  async execute({
    limit,
    offset
  }: GetTasksUseCaseRequest): Promise<GetTasksUseCaseResponse> {
    const tasks = await this.tasksRepository.findAll(limit, offset)

    if (!tasks) {
      throw new ResourceNotFoundError()
    }

    return {
      tasks,
    }
  }
}