import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    currentItem: [],
    currentGoods: [],
    history: []
  },
  mutations: {
    addNewItem (state, payload) {
      if (state.items.length) {
        let itemInCart = false

        state.items.map((item) => {
          if (item[1] === payload[1] && item[3] === payload[3]) {
            itemInCart = true
            item[2] = item[2] + payload[2]
            window.localStorage.setItem('cart', JSON.stringify(state.items))
          }
        })

        if (!itemInCart) {
          state.items = [...state.items, payload]
          window.localStorage.setItem('cart', JSON.stringify(state.items))
        }
      } else {
        state.items = [...state.items, payload]
        window.localStorage.setItem('cart', JSON.stringify(state.items))
      }
    },
    getDataFromStorage (state) {
      if (window.localStorage.getItem('cart')) {
        state.items = [...JSON.parse(window.localStorage.getItem('cart'))]
      }
    },
    deleteItemFromCart (state, payload) {
      state.items.splice(payload, 1)
      window.localStorage.setItem('cart', JSON.stringify(state.items))
    },

    setCurrentItem (state, payload) {
      state.currentItem = [payload]
      window.localStorage.setItem('currentitem', JSON.stringify(state.currentItem))
    },
    getCurrentItemFromStorage (state) {
      if (window.localStorage.getItem('currentitem')) {
        state.currentItem = [JSON.parse(window.localStorage.getItem('currentitem'))]
      }
    },
    setCurrentGoods (state, payload) {
      state.currentGoods = [...payload]
      window.localStorage.setItem('currentgoods', JSON.stringify(state.currentGoods))
    },
    getCurrentGoodsFromStorage (state) {
      if (window.localStorage.getItem('currentgoods')) {
        state.currentGoods = [...JSON.parse(window.localStorage.getItem('currentgoods'))]
      }
    },
    addNewItemToHistory (state, payload) {
      const arr = [...state.history, payload]

      function unique (arr) {
        const result = []
        for (const el of arr) {
          if (!result.join('').includes(el.join())) {
            result.push(el)
          }
        }
        return result
      }

      state.history = unique(arr)
      window.localStorage.setItem('history', JSON.stringify(state.history))
    },
    getHistoryFromStorage (state) {
      if (window.localStorage.getItem('history')) {
        state.history = [...JSON.parse(window.localStorage.getItem('history'))]
      }
    },
    setCounterInCart (state, payload) {
      if (payload[1]) {
        if (!(state.items[payload[0]][2] === 1)) {
          const newItem = state.items[payload[0]]
          newItem[2] -= 1
          state.items.splice(payload[0], 1, newItem)
          window.localStorage.setItem('cart', JSON.stringify(state.items))
        }
      } else {
        const newItem = state.items[payload[0]]
        newItem[2] += 1
        state.items.splice(payload[0], 1, newItem)
        window.localStorage.setItem('cart', JSON.stringify(state.items))
      }
    }

  },
  getters: {
    getCartData: (state) => state.items,
    getCurrentItem: (state) => state.currentItem[0],
    getCurrentGoods: (state) => state.currentGoods,
    getHistory: (state) => state.history
  },
  actions: {

  },
  modules: {
  }
})
