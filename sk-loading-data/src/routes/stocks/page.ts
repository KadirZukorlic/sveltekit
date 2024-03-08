import type { PageLoad } from '../../../.svelte-kit/types/src/routes/address/$types'

export const load: PageLoad = async ({ fetch }) => {
  const mostActiveStockResponse = await fetch(
    'http://localhost:4000/most-active-stocks',
  )
  const topGainingStockResponse = await fetch(
    'http://localhost:4000/top-gaining-stocks',
  )
  const topLosingStockResponse = await fetch(
    'http://localhost:4000/top-losing-stocks',
  )
  return {
    mostActiveStocks: mostActiveStockResponse.json(),
    topGainingStocks: topGainingStockResponse.json(),
    topLosingStocks: topLosingStockResponse.json(),
  }
}
