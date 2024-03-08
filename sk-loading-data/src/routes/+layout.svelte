<script>
  import { page } from '$app/stores';
    export let data;
    const username = data.username;

</script>

{#if $page.data.notification}
  <p>{$page.data.notification}</p>
{/if}
<div>Welcome, {username} </div>

<slot />