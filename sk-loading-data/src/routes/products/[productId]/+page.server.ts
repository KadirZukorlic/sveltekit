import type { PageLoad } from '../../../../.svelte-kit/types/src/routes/products/$types'

export const load: PageLoad = async ({ params, fetch, url, route }) => {
  console.log('URL:', url)
  console.log('Route:', route)
  console.log('Params:', params)
  // @ts-ignore
  const { productId } = params
  const title = 'Product details'
  const response = await fetch('http://localhost:4000/products')
  const products = await response.json()
  const product = products.find((p: any) => p.id === parseInt(productId))
  return {
    title,
    product,
  }
}
