

export async function fetcherAdapter<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {

  const defaultHeaders = {
    'Content-Type': 'application/json',
  }
  const headers = init?.headers
    ? { ...defaultHeaders, ...init.headers }
    : defaultHeaders

  const data = await fetch(`http://localhost:3333/${input}`, {
    ...init, cache: 'no-cache', headers
  })
  const result = await data.json()

  return result as T

}