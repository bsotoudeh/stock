import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './routes'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-stock-8b15c.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + ' ' + value.toLocaleString()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
