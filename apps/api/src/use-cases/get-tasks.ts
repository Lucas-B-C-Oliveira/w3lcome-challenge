import { Task } from '@prisma/client'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { TasksRepository } from '@/repositories/tasks-repository'
import { Meta } from '@/@types'

interface GetTasksUseCaseRequest {
  limit: number
  offset: number
}

interface GetTasksUseCaseResponse {
  tasks: Task[]
  meta: Meta
}

export class GetTasksUseCase {
  constructor(private tasksRepository: TasksRepository) { }

  async execute({
    limit,
    offset
  }: GetTasksUseCaseRequest): Promise<GetTasksUseCaseResponse> {
    const result = await this.tasksRepository.findAll(limit, offset)

    if (!result?.tasks) {
      throw new ResourceNotFoundError()
    }

    return {
      tasks: result?.tasks,
      meta: result?.meta
    }
  }
}