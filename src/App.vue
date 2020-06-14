<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <div class="row">
        <div class="col-lg-12">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'App',
    components: {
      appHeader: Header
    },
    created () {
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 30px;
    /*margin-top: 60px;*/
  }

  a {
    color: #242424;
    padding: 0 10px;
  }
  a:hover {
    text-decoration: none;
    color: #7f7f7f;
    /*background-color: #7f7f7f;*/
    /*padding: 20px 10px;*/
    box-sizing: border-box;
  }

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
