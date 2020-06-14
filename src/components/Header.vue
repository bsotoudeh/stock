<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" href="#">Stock Trader</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" active-class="active" tag="li"><a href="">Portfolio</a></router-link>
        <router-link to="stocks" active-class="active" tag="li"><a href="">Stocks</a></router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay">End Day</a></li>
        <li class="dropdown"
            @click="isDropDownOpen = !isDropDownOpen">
          <a
            class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <ul :class="[isDropDownOpen ? 'show-d' : 'dropdown-menu']" class="" aria-labelledby="navbarDropdown"
              v-show="isDropDownOpen === true">
            <li class="dropdown-item"  @click="saveData"><a href="#">Save Data</a></li>
            <li class="dropdown-item"  @click="loadData"><a href="#">Load Data</a></li>
          </ul>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds | currency}}</strong>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Header',
    data () {
      return {
        isDropDownOpen: false
      }
    },
    computed: {
      funds () {
        return this.$store.getters.funds
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay () {
        return this.$store.dispatch('randomizeStocks')
      },
      saveData () {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        }
        this.$http.put('data.json', data)
      },
      loadData () {
        this.fetchData()
      }
    }
  }
</script>

<style scoped>
  .show-d {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: block;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem;
  }
</style>
