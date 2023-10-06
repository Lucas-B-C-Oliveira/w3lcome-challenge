import { TaskData } from "../../../@types"

interface UseTaskProps {
  taskData: TaskData
}

export function useTask({ taskData }: UseTaskProps) {

  return {
    title: taskData?.title,
    done: taskData?.done,
    id: taskData?.id
  }
}