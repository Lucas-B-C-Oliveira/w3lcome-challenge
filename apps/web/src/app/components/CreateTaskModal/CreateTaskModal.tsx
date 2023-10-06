'use client'

import { ActionButton } from "../ActionButton/ActionButton"
import { useCreateTaskModal } from "./useCreateTaskModal"

export function CreateTaskModal() {
  const { handleCreate, handleOnChangeInput, titleText } = useCreateTaskModal()

  return (
    <div className="h-fit w-fit flex flex-row gap-1 items-center">

      <div className="relatvie w-fit h-fit flex">
        <label className="absolute top-[0.97rem] left-[1.9rem] inline-block bg-white px-1 text-sm font-bold text-gray-600 z-10">Title</label>
        <input className="w-40 cursor-default text-left rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" type="text" value={titleText} onChange={handleOnChangeInput} />
      </div>

      <ActionButton onClick={handleCreate}>
        Create Task
      </ActionButton>
    </div>
  )
}