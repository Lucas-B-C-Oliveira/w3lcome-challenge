import { Task } from '@prisma/client'
import { TasksRepository } from '@/repositories/tasks-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface DeleteTaskUseCaseRequest {
  id: number
}

interface DeleteTaskUseCaseResponse {
  task: Task
}

export class DeleteTaskUseCase {
  constructor(private tasksRepository: TasksRepository) { }

  async execute({
    id,
  }: DeleteTaskUseCaseRequest): Promise<DeleteTaskUseCaseResponse> {
    const task = await this.tasksRepository.delete(id)

    if (!task) {
      throw new ResourceNotFoundError()
    }

    return {
      task,
    }
  }
}