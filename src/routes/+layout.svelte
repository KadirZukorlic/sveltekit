<script>
    /** @type {import('./$types').LayoutData} */
</script>

<header>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
</header>
<slot />

<footer>
    <div>footer link 1</div>
    <div>footer link 2</div>
    <div>footer link 3</div>
    <div>footer link 4</div>
</footer>

<style>
    :global(html, body) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        height: 100%;
    }
    header {
        height: 50px;
        background-color: rgb(91, 73, 255);
        font-size: 24px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
    }

    header > div:hover {
        transition: color 0.9s ease;
        cursor: pointer;
        color: rgb(189, 182, 255);
    }

    footer {
        height: 220px;
        background-color: rgb(91, 73, 255);
        color: white;
        padding: 16px;
        position: absolute;
        width: 100%;
        bottom: 0;
    }
</style>
