'use client'
import { useRouter } from "next/navigation"
import { usePaginationStore } from "../../../store/paginationStore"

interface useTaskPaginationItemProps {
  isSelected: boolean
  newOffset: number
  page: number
}


export function useTaskPaginationItem({ isSelected, newOffset, page }: useTaskPaginationItemProps) {

  const { currentPage, nextPage, previousPage } = usePaginationStore()
  const router = useRouter()

  function handleClick() {
    if (!isSelected) {

      if (page > currentPage) {
        nextPage()
      }
      else if (page < currentPage) {
        previousPage()
      }

      router.push(`/?offset=${newOffset}`)
    }
  }

  return {
    handleClick,
  }
}