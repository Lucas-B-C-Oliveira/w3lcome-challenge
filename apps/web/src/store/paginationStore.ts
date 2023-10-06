import { create } from 'zustand'

interface PaginationStoreType {
  currentPage: number
  totalNumberOfPage: number
  previousPage: () => void
  nextPage: () => void
  setTotalNumberOfPage: (totalNumberOfPage: number) => void
}

export const usePaginationStore = create<PaginationStoreType>()(
  (set, get) => ({
    currentPage: 1,
    totalNumberOfPage: 0,

    previousPage: () => {
      const currentState = get()
      const newPage = currentState.currentPage - 1 > 0 ? currentState.currentPage - 1 : 0
      set(() => ({ currentPage: newPage }))
    },
    nextPage: () => {
      const currentState = get()
      const newPage = currentState.currentPage + 1 <= currentState.totalNumberOfPage ? currentState.currentPage + 1 : currentState.totalNumberOfPage
      set(() => ({ currentPage: newPage }))
    },
    setTotalNumberOfPage: (newTotalNumberOfPage: number) => {
      set(() => ({ totalNumberOfPage: newTotalNumberOfPage }))
    }
  }),
)
