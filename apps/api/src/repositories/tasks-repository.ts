import { Meta } from '@/@types'
import { Prisma, Task } from '@prisma/client'

export interface TasksRepository {
  findAll(limit?: number, offset?: number): Promise<{ tasks: Task[], meta: Meta } | null>
  create(data: Prisma.TaskCreateInput): Promise<Task>
  edit(id: number, done: boolean): Promise<Task>
  delete(id: number): Promise<Task | null>
}