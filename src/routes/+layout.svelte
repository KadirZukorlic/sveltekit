<script>
    /** @type {import('./$types').LayoutData} */
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
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
