import { type Meta, type TaskData } from "../../../@types";
import { Task } from "../Task/Task";
import { TaskPagination } from "../TaskPagination/TaskPagination";

interface TasksCardProps {
  tasks: TaskData[]
  meta: Meta
}

export function TasksCard({ tasks, meta }: TasksCardProps) {

  return (
    <div className="flex flex-col w-fit h-fit  shadow-md rounded-2xl bg-white min-w-56">
      <div className="relative w-full h-fit flex flex-row items-center justify-center rounded-t-2xl bg-zinc-600">
        <h2 className="text-lg text-white font-bold p-[0.1rem]">Tasks</h2>
      </div>

      <div className="px-6 pr-1 py-3 flex flex-col gap-6">
        {tasks.map((task: TaskData) => <Task key={task?.id} taskData={task} />)}
      </div>

      <div className="relative w-full h-fit flex flex-row items-center justify-center rounded-b-2xl bg-zinc-600">
        <TaskPagination meta={meta} />
      </div>

    </div>
  )

}
