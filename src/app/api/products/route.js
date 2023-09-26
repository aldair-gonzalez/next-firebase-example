import { handler } from '../get-data'

export const GET = async () => {
  const products = await handler()
  return new Response(JSON.stringify(products))
}
