<script>
    export let data;
    const products = data.products
</script>

<h1>{data.title}</h1>
<p>list of products</p>
{#each products as product}
    <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <hr />
        <p>{product.price} $</p>
    </div>
{/each}