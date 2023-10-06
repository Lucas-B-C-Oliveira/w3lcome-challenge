'use client'
import { useMutation } from "@tanstack/react-query"
import { fetcherAdapter } from "../../../utils/server/fetcherAdapter"
import { useRouter } from "next/navigation"
import { useState } from "react"


export function useCreateTaskModal() {
  const router = useRouter()

  const [titleText, setTitleText] = useState<string>('')


  const { mutateAsync, status } = useMutation({
    mutationKey: ['create/useCreateTaskModal'],
    mutationFn: async (title: string) => {
      try {

        const response = await fetcherAdapter<any>(`tasks`, {
          method: 'POST',
          body: JSON.stringify({
            title
          })
        })

        return { ...response }
      } catch (error) {
        console.error(error)
      }
    },
  })

  async function handleCreate() {
    await mutateAsync(titleText)
    router.refresh()
  }

  function handleOnChangeInput(event: any) {
    const value = event.target.value
    setTitleText(value)
  }

  return {
    handleCreate,
    titleText,
    handleOnChangeInput
  }

}