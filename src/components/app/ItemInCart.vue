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
                  v-on:click="setCounter(goods[6], $event)"
                >
                  <img src="@/assets/icons/minus.png" />
                </div>

                <div class=".quantity-button-cart">
                  {{this.goods[2]}}
                </div>

                <div
                  class="quantity-icon-cart"
                  v-on:click="setCounter(goods[6], $event)"
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
              src="@/assets/icons/close.png"
              v-on:click="deleteFromCart(goods[6])"
            />
          </div>

        </div>
      </div>
</template>

<script>
import { clothesData } from '../../data';
export default {
  name: 'itemInCart',
  data () {

    // const counter = this.goods[2]
    return {
      clothesData,
      counter: this.goods[2]
    }
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    setCounter (index, event) {
      if (true) {
        this.counter == 1 ? '1' : this.counter -= 1;
      } else {
        this.counter += 1;
      }
      this.$store.commit('setCounterInCart', [index, event.currentTarget.id]);

    },
    destroy () {
      this.$destroy();
    },
    deleteFromCart (index) {
      this.$store.commit('deleteItemFromCart', index);

    }
  },
  computed: {

  }

}
</script>
