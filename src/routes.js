import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../src/components/Home.vue'
import Stocks from '../src/components/stocks/Stocks.vue'
import Portfolio from './components/portfolio/Portfolio'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/stocks',
    component: Stocks
  },
  {
    path: '/portfolio',
    component: Portfolio
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
