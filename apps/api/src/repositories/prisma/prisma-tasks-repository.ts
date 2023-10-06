import { prisma } from '@/lib/prisma'
import { Prisma, Task } from '@prisma/client'

import { TasksRepository } from '../tasks-repository'

export class PrismaTasksRepository implements TasksRepository {

  async findAll(limit: number, offset: number) {
    const tasks = await prisma.task.findMany({
      take: limit,
      skip: offset
    })
    return tasks
  }

  async edit(id: number, newData: Task) {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: newData,
    })

    return task
  }

  async delete(id: number) {

    const task = await prisma.task.delete({
      where: {
        id,
      },
    })

    return task

  }


  async create(data: Prisma.TaskCreateInput) {
    const task = await prisma.task.create({
      data,
    })

    return task
  }
}