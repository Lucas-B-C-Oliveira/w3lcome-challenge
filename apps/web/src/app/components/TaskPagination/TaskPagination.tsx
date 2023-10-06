'use client'
import { Meta } from "../../../@types"
import { TaskPaginationItem } from "../TaskPaginationItem/TaskPaginationItem"
import { useTaskPagination } from "./useTaskPagination"

interface TaskPaginationProps {
  meta: Meta
}

export function TaskPagination({ meta }: TaskPaginationProps) {

  const { currentPage, limitItems, pagesArray } = useTaskPagination({ meta })


  return (

    <div className="flex flex-row gap-1 items-center p-1">
      {pagesArray && pagesArray.length > 0 && pagesArray.map((item: number) => {

        const newOffset = (item - 1) * limitItems

        return (
          <TaskPaginationItem page={item} newOffset={newOffset} isSelected={item === currentPage} />
        )
      })}
    </div>
  )
}