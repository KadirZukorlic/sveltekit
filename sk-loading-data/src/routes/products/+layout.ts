import type { PageLoad } from '../../../.svelte-kit/types/src/routes/address/$types'

export const load: PageLoad = async ({ fetch }) => {
  const title = 'Featured products'

  const response = await fetch('http://localhost:4000/featured-products')
  const featuredProducts = await response.json()

  return {
    title,
    featuredProducts,
  }
}
