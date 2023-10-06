'use client'
import { useMutation } from "@tanstack/react-query"
import { fetcherAdapter } from "../../../utils/server/fetcherAdapter"
import { useRouter } from "next/navigation"

interface UseEditTaskModalProps {
  taskId: number
  newDone: boolean
}

export function useEditTaskModal({ taskId, newDone }: UseEditTaskModalProps) {
  const router = useRouter()

  const { mutateAsync, status } = useMutation({
    mutationKey: ['update/useEditTaskModal'],
    mutationFn: async (data: UseEditTaskModalProps) => {
      try {

        console.log('data_______ ', data)
        const response = await fetcherAdapter<any>(`tasks`, {
          method: 'PATCH',
          body: JSON.stringify({
            id: data?.taskId,
            done: data?.newDone
          })
        })

        return { ...response }
      } catch (error) {
        console.error(error)
      }
    },
  })

  async function handleEdit() {
    await mutateAsync({
      newDone,
      taskId
    })
    router.refresh()
  }

  return {
    handleEdit
  }

}