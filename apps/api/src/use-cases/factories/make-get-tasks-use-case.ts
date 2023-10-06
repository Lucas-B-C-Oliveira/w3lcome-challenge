import { PrismaTasksRepository } from '@/repositories/prisma/prisma-tasks-repository'
import { GetTasksUseCase } from '../get-tasks'

export function makeGetTaskUseCase() {
  const tasksRepository = new PrismaTasksRepository()
  const useCase = new GetTasksUseCase(tasksRepository)

  return useCase
}