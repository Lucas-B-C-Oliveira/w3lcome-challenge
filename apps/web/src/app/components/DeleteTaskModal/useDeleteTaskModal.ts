'use client'
import { useMutation } from "@tanstack/react-query"
import { fetcherAdapter } from "../../../utils/server/fetcherAdapter"
import { useRouter } from "next/navigation"

interface useDeleteTaskModalProps {
  taskId: number
}

export function useDeleteTaskModal({ taskId }: useDeleteTaskModalProps) {
  const router = useRouter()

  const { mutateAsync, status } = useMutation({
    mutationKey: ['delete/useDeleteTaskModal'],
    mutationFn: async (id: number) => {
      try {
        const response = await fetcherAdapter<any>(`tasks?id=${id}`, {
          method: 'DELETE',
        })

        return { ...response }
      } catch (error) {
        console.error(error)
      }
    },
  })

  async function handleDelete() {
    await mutateAsync(taskId)
    router.refresh()
  }

  return {
    handleDelete
  }

}