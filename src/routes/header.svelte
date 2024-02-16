<header>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
</header>


<style>
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
</style>