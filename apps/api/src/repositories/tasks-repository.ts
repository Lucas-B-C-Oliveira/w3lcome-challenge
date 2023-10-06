import { Prisma, Task } from '@prisma/client'

export interface TasksRepository {
  findAll(limit?: number, offset?: number): Promise<Task[] | null>
  create(data: Prisma.TaskCreateInput): Promise<Task>
  edit(id: number, newData: Task): Promise<Task>
  delete(id: number): Promise<Task | null>
}