'use client'
import { memo } from "react";
import { CheckCircleIcon, ExclamationCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid'
import { type TaskData } from "../../../@types";
import { useTask } from "./useTask";
import { ActionButton } from "../ActionButton/ActionButton";
import { Container } from "../Modal/Container";
import { DeleteTaskModal } from "../DeleteTaskModal/DeleteTaskModal";
import { EditTaskModal } from "../EditTaskModal/EditTaskModal";

interface TaskProps {
  taskData: TaskData
}

export const Task = memo(function Task({ taskData }: TaskProps) {

  const { title, done, id } = useTask({ taskData })

  return (
    <div className="flex flex-row gap-1 items-center justify-between w-96">
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

      <div className="flex flex-row gap-[0.05rem] items-center">

        <Container openModalButton={
          <ActionButton>
            Edit
            <PencilSquareIcon className="h-4 w-4 " />
          </ActionButton>
        }>

          <EditTaskModal done={done} taskId={id} />

        </Container>

        <Container openModalButton={
          <ActionButton
            classNameToMerge={`bg-transparent hover:bg-transparent hover:text-red-400 text-red-500 shadow-none`}
          >
            <TrashIcon className="h-4 w-4 " />
          </ActionButton>
        }>

          <DeleteTaskModal taskId={id} />

        </Container>
      </div>

    </div>
  )

}) 
