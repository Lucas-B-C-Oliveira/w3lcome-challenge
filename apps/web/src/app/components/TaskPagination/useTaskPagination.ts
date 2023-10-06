'use client'
import { useRouter } from "next/navigation"
import { usePaginationStore } from "../../../store/paginationStore"
import { Meta } from "../../../@types"
import { useEffect, useState } from "react"

interface useTaskPaginationProps {
  meta: Meta
}


export function useTaskPagination({ meta }: useTaskPaginationProps) {

  const { currentPage, setTotalNumberOfPage, totalNumberOfPage } = usePaginationStore()
  const [pagesArray, setPagesArray] = useState<any>([])

  const totalItems = meta?.total
  const limitItems = meta?.limit


  useEffect(() => {
    if (totalNumberOfPage !== Math.ceil(totalItems / limitItems)) {
      const newTotalNumberOfPage = Math.ceil(totalItems / limitItems)
      setTotalNumberOfPage(newTotalNumberOfPage)
    }

  }, [meta?.total])


  useEffect(() => {

    const newArray = Array.from({ length: totalNumberOfPage }, (_, index) => index + 1)
    setPagesArray(newArray)

  }, [totalNumberOfPage])

  return {
    pagesArray,
    limitItems,
    currentPage

  }
}