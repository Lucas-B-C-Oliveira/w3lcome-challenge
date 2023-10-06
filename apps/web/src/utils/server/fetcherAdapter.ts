

export async function fetcherAdapter<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {

  const data = await fetch(`http://localhost:3333/${input}`, { ...init, cache: 'no-cache' })
  const result = await data.json()

  return result as T

}