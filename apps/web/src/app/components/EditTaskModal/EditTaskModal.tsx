'use client'

import { ActionButton } from "../ActionButton/ActionButton"
import { useEditTaskModal } from "./useEditTaskModal"

interface DeleteTaskModalProps {
  taskId: number
  done: boolean
}

export function EditTaskModal({ taskId, done }: DeleteTaskModalProps) {
  const { handleEdit } = useEditTaskModal({ taskId, newDone: !done })

  console.log('done', done)

  return (
    <div className="h-fit w-fit flex flex-row gap-1">
      <ActionButton onClick={handleEdit}>
        {!done && "Done"}
        {done && "Unmake"}
      </ActionButton>
    </div>
  )
}