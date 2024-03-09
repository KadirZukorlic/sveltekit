<script>
    export let data;
    const products = data.products
    
    $: console.log(data.products)
</script>

<h1>{data.title} for {data.username}</h1>
<p>list of products</p>
{#each products as product}
    <div>
        <a href={`/products/${product.id}`}>
            <h2>{product.title}</h2>
        </a>
        <p>{product.description}</p>
        <hr />
        <p>{product.price} $</p>
    </div>
{/each}