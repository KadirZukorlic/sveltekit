<script>
    /** @type {import('./$types').LayoutData} */
    import Header from '$lib/header.svelte';
    import Footer from '$lib/footer.svelte';
</script>

<Header />
<slot />
<Footer />

<style>
    :global(html, body) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        height: 100%;
    }
</style>
