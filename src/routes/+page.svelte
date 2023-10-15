<script>
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation'
    const orderHandler = () => {
        console.log('Placing your order!')
        goto('/products', { replaceState: true })
    }

    beforeNavigate((navigation) => {
        console.log({ before: navigation })
    })
    afterNavigate((navigation) => {
        console.log({ after: navigation })
    })
</script>

<h1>Welcome to home</h1>

<a href="/about">About</a>
<a href="/products">Products</a>
<a href="/blog">Blog</a>
<a href="/profile">Profile</a>

<button on:click={orderHandler}>Place Order</button>
