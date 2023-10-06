import { type Meta, type TaskData } from "../@types";
import { fetcherAdapter } from "../utils/server/fetcherAdapter";
import { TasksCard } from "./components/TasksCard/TasksCard";

const LIMIT_DEFAULT = 5
const OFFSET_DEFAULT = 0

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {


  const limit = LIMIT_DEFAULT
  const offset = searchParams?.offset ?? OFFSET_DEFAULT
  const data = await fetcherAdapter<{ meta: Meta, tasks: TaskData[] }>(`tasks?limit=${limit}&offset=${offset}`)

  return (
    <main id="main" className="w-full h-full bg-white flex items-center justify-center">
      <TasksCard meta={data?.meta} tasks={data?.tasks} />
    </main>
  );
}
