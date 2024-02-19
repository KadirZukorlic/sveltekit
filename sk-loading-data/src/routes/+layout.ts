import type { PageLoad } from '../../.svelte-kit/types/src/routes/address/$types'

export const load: PageLoad = async () => {
  return {
    username: 'Hamza Zukorlic',
  }
}
