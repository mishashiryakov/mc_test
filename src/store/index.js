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
      window.localStorage.setItem('cart' , JSON.stringify(state.items));
    },
    getDataFromStorage (state) {
      if (window.localStorage.getItem('cart')) {
        state.items =  [...JSON.parse(window.localStorage.getItem('cart'))]
      }
    },
    setCurrentItem (state, payload) {
      state.currentItem = [payload]
      window.localStorage.setItem('currentitem' , JSON.stringify(state.currentItem));
    },
    getCurrentItemFromStorage (state) {
      if (window.localStorage.getItem('currentitem')) {
        state.currentItem =  [JSON.parse(window.localStorage.getItem('currentitem'))]
      }
    },
    setCurrentGoods (state, payload) {
      state.currentGoods = [...payload]
      window.localStorage.setItem('currentgoods', JSON.stringify(state.currentGoods));
    },
    getCurrentGoodsFromStorage (state) {
      if (window.localStorage.getItem('currentgoods')) {
        state.currentGoods =  [...JSON.parse(window.localStorage.getItem('currentgoods'))]
      }
    }
  },
  getters: {
    getCartData: (state) => state.items,
    getCurrentItem: (state) => state.currentItem[0],
    getCurrentGoods: (state) => state.currentGoods
  },
  actions: {

  },
  modules: {
  }
})
