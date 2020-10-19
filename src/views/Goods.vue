<template>
  <div class="goods-wrapper">
    <div
      class="goods-item"
      v-for="item in clothesData[currentItem]"
      :key="item.name"
      v-on:click="setCurrentGoods(item.category, item.nameObj)"
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
      <p class="price-common">{{item.price + ' ₽'}}</p>
    </div>
  </div>
</template>

<script>
import { clothesData } from '../data';

export default {
  name: 'goods',
  data() {
    return {
      clothesData
    }
  },
  methods: {
    setCurrentGoods (category, item) {
      this.$store.commit('setCurrentGoods', [category, item]);
      this.$store.commit('addNewItemToHistory', [category, item]);
      while (Math.max(document.body.scrollTop,document.documentElement.scrollTop) > 0) {
        window.scrollBy(0,-100);
      }
    }
  },
  computed: {
    currentItem () {
      if(this.$store.getters.getCurrentItem) {
        while (Math.max(document.body.scrollTop,document.documentElement.scrollTop) > 0) {
          window.scrollBy(0,-100);
        }
        return this.$store.getters.getCurrentItem
      } else {
        return 'tshirt';
      }
    }
  },
  created() {
    this.$store.commit('getCurrentItemFromStorage')
  }
}
</script>
