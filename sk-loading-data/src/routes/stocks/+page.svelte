<script>
  export let data;
</script>

<span>Most active stock- {data.mostActiveStocks.symbol}</span>
<span>Most gainer stock- {data.topGainingStocks.symbol}</span>
<span>Most loser stock- {data.topLosingStocks.symbol}</span>

<style>
  span {
      margin-right: 30px;
      font-size: 24px;
  }
</style>