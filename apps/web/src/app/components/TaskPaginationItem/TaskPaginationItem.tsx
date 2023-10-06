'use client'

import { useTaskPaginationItem } from "./useTaskPaginationItem"

interface TaskPaginationItemProps {
  isSelected: boolean
  newOffset: number
  page: number
}

export function TaskPaginationItem({ isSelected, newOffset, page }: TaskPaginationItemProps) {

  const { handleClick } = useTaskPaginationItem({ isSelected, newOffset, page })

  return (
    <button
      disabled={isSelected}
      className={`text-sm text-white font-bold  h-5 w-5 flex items-center justify-center ${isSelected ? 'bg-yellow-500 rounded-full' : 'hover:text-yellow-400'}`}
      onClick={handleClick}
    >
      {page}
    </button>
  )
}