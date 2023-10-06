import { Prisma, Task } from '@prisma/client'
import { TasksRepository } from '@/repositories/tasks-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface UpdateTaskUseCaseRequest {
  id: number
  done: boolean
}

interface UpdateTaskUseCaseResponse {
  task: Task
}

export class UpdateTaskUseCase {
  constructor(private tasksRepository: TasksRepository) { }

  async execute({
    id,
    done
  }: UpdateTaskUseCaseRequest): Promise<UpdateTaskUseCaseResponse> {
    const task = await this.tasksRepository.edit(id, done)

    if (!task) {
      throw new ResourceNotFoundError()
    }

    return {
      task,
    }
  }
}