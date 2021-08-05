import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fruits: null,
  },
  mutations: {
    setFruits(state, fruits) {
      state.fruits = fruits
    }
  },
  getters: {
    fruits: state => state.fruits
  }
})

export default store;
