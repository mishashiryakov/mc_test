<template>
  <div class="goods-wrapper">
    <div
      class="goods-item"
      v-for="item in clothesData[currentItem[0]]"
      :key="item.name"
      v-on:click="setCurrentGoods(item)"
    >
      <!-- <div
        v-bind:style="{ backgroundImage: 'url(' + item.images[0] + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
        class="goods-img"
      /> -->
      <router-link
        to="/current-goods"
      >
        <img class="goods-img" :src="item.images[0]"/>
      </router-link>

      <p class="item-name-common">{{item.name}}</p>
      <p class="price-common">{{item.price}}</p>
    </div>
  </div>
</template>

<script>
import { clothesData } from '../data'

export default {
  name: 'goods',
  data() {
    return {
      clothesData
    }
  },
  methods: {
    setCurrentGoods (item) {
      this.$store.commit('setCurrentGoods', item)
    }
  },
  computed: {
    currentItem () {
      return this.$store.getters.getCurrentItem
    }
  },
  created() {

  }
}
</script>
