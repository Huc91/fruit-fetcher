import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fruits: null,
    fruitDetails: null,
  },
  mutations: {
    setFruits(state, fruits) {
      state.fruits = fruits
    },
    setDetail(state, fruitDetails) {
      state.fruitDetails = fruitDetails
    },
  },
  getters: {
    fruits: state => state.fruits,
    fruitDetails: state => state.fruitDetails
  }
})

export default store;
