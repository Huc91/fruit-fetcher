import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  fruits: null,
  fruitDetails: null,
};

export const mutations = {
  setFruits(state, fruits) {
    state.fruits = fruits
  },
  setDetail(state, fruitDetails) {
    state.fruitDetails = fruitDetails
  },
};

export const getters = {
  fruits: state => state.fruits,
  fruitDetails: state => state.fruitDetails
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
})

export default store;
