import type { PageLoad } from '../../../.svelte-kit/types/src/routes/products/$types'

export const load: PageLoad = async ({ fetch, parent }) => {
  console.log('load function called in page.ts')
  const parentData = await parent()
  const { username } = parentData
  console.log('parentData hahahaha', parentData)
  const title: string = 'List of available products'
  const response = await fetch('http://localhost:4000/products')
  const products = await response.json()
  return {
    title,
    products,
    username,
  }
}
