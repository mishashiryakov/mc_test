<template>
    <div class="item-cart">
        <div class="cart-left-block">
          <img
          :src="goods[5]"
          class="img-cart"
        />
        <div class="cart-info-block">
          <p>{{goods[1]}}</p>
          <span>{{goods[3]}}</span>
          <div class="quantity-item-in-cart">
                <div
                  id="minus"
                  class="quantity-icon-cart"
                  v-on:click="setCounter(goods[6], $event, '-')"
                >
                  <img src="@/assets/icons/minus.png" />
                </div>

                <div class=".quantity-button-cart">
                  {{this.goods[2]}}
                </div>

                <div
                  class="quantity-icon-cart"
                  v-on:click="setCounter(goods[6], $event, '+')"
                >
                  <img src="@/assets/icons/plus.png" />
                </div>
              </div>
        </div>
        </div>

        <div class="cart-price-block">
          <div class="cart-delete">
            <img
              class="cart-delete-img"
              src="@/assets/icons/close.svg"
              v-on:click="deleteFromCart(goods[6])"
            />
          </div>

          <p class="cart-price">
            {{this.goods[4] * this.goods[2] + ' ₽'}}
          </p>

        </div>
      </div>
</template>

<script>
import { clothesData } from '../../data'
export default {
  name: 'itemInCart',
  data () {
    return {
      clothesData
    }
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    setCounter (index, event, symbol) {
      if (this.goods[2] === 1 && symbol === '-') {

      } else {
        this.price(symbol)
      }

      this.$store.commit('setCounterInCart', [index, event.currentTarget.id])
    },
    deleteFromCart (index) {
      this.price('-', this.goods[2])
      this.$store.commit('deleteItemFromCart', index)
    },
    price (symbol, counter) {
      let count
      if (counter) {
        count = counter
      } else {
        count = 1
      }
      this.$emit('price', {
        price: this.goods[4] * count,
        symbol
      })
    }
  },
  computed: {

  },
  created () {
    this.price('+', this.goods[2])
  }
}
</script>
