<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  // import {mapGetters} from '../../store/modules/stocks'

  export default {
    name: 'Stocks',
    components: {
      appStock: Stock
    },
    computed: {
      stocks () {
        console.log(this.$store.getters.stocks)
        return this.$store.getters.stocks
      }
    }
  }
</script>

<style scoped>

</style>
