import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    currentItem: [],
    currentGoods: []
  },
  mutations: {
    addNewItem (state, payload) {
      state.items = [...state.items, payload]
      window.sessionStorage.setItem('cart' , JSON.stringify(state.items));
    },
    getDataFromStorage (state) {
      if (window.sessionStorage.getItem('cart')) {
        state.items =  [...JSON.parse(window.sessionStorage.getItem('cart'))]
      }
    },
    setCurrentItem (state, payload) {
      state.currentItem = [payload]
    },
    setCurrentGoods (state, payload) {
      state.currentGoods = [payload]
    }
  },
  getters: {
    getCartData: (state) => state.items,
    getCurrentItem: (state) => state.currentItem,
    getCurrentGoods: (state) => state.currentGoods[0]
  },
  actions: {

  },
  modules: {
  }
})
