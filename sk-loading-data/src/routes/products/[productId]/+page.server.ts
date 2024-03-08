import type { PageLoad } from '../../../../.svelte-kit/types/src/routes/products/$types'
import { error, redirect } from '@sveltejs/kit'

export const load: PageLoad = async ({ params, fetch, url, route }) => {
  console.log('URL:', url)
  console.log('Route:', route)
  console.log('Params:', params)
  // @ts-ignore
  const { productId } = params
  if (productId > 3) {
    // throw error(404, {
    //   message: 'Oh NO! Product not found!',
    //   hint: 'Try a different product',
    // })
    throw redirect(307, '/products')
  }

  const notification = 'End of season sale! 50% off'
  const title = 'Product details'
  const response = await fetch('http://localhost:4000/products')
  const products = await response.json()
  const product = products.find((p: any) => p.id === parseInt(productId))
  return {
    title,
    product,
    notification,
  }
}
