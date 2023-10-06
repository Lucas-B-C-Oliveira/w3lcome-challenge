import { memo } from "react";
import { CheckCircleIcon, ExclamationCircleIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { type TaskData } from "../../../@types";
import { useTask } from "./useTask";
import { ActionButton } from "../ActionButton/ActionButton";

interface TaskProps {
  taskData: TaskData
}

export const Task = memo(function Task({ taskData }: TaskProps) {

  const { title, done } = useTask({ taskData })

  return (
    <div className="flex flex-row gap-1 items-center justify-between w-80">
      <div className="flex flex-row gap-1 items-center">


        {done && (
          <CheckCircleIcon className={`h-6 w-6 font-bold text-emerald-500 `} />
        )}

        {!done && (
          <ExclamationCircleIcon className={`h-6 w-6 font-bold text-yellow-500 `} />
        )}

        <p className="text-xl font-semibold">
          {title}
        </p>

      </div>

      <ActionButton>
        Edit
        <PencilSquareIcon className="h-4 w-4 " />
      </ActionButton>

    </div>
  )

}) 
