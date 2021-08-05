import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior() {
      return {
          x: 0,
          y: 0
      }
    }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
