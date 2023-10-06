'use client'

import { ActionButton } from "../ActionButton/ActionButton"
import { useDeleteTaskModal } from "./useDeleteTaskModal"

interface DeleteTaskModalProps {
  taskId: number
}

export function DeleteTaskModal({ taskId }: DeleteTaskModalProps) {
  const { handleDelete } = useDeleteTaskModal({ taskId })

  return (
    <div className="h-fit w-fit flex flex-row gap-1">
      <ActionButton onClick={handleDelete}>
        Delete
      </ActionButton>
    </div>
  )
}