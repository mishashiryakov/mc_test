<template>
  <div class="current-goods-wrapper">

    <router-link
      to="/goods"
    >
      <div class="back-to-category">
        <img class="back-icon" src="../assets/icons/back.svg">
      </div>
    </router-link>

    <CurrentGoodsComponent

      :currentGoods="currentGoods"
      :key="JSON.stringify(currentGoods)"
    />

    <div class="catalog-block">
      <p class="offer-headline">Смотрите также</p>
      <div class="offer-goods">
        <div
        class="offer-item"
        v-for="item in offers"
        :key="item.name"
        v-on:click="setCurrentGoods(item.category, item.nameObj)"
      >

        <router-link
          to="/current-goods"
        >
          <img class="goods-img" :src="item.images[0]"/>
        </router-link>

        <p class="item-name-common">{{item.name}}</p>
        <p class="price-common">{{item.price + ' ₽'}}</p>
      </div>
      </div>

    </div>

    <div class="history-views">
      <p class="history-headline">История просмотров</p>
      <Car
        :perPageCustom="[[320, 1], [631, 2], [1024, 3]]"
        :navigationEnabled="true"
        navigationPrevLabel="‹"
        navigationNextLabel="›"
        :paginationEnabled="false"
      >


          <Slide
             v-for="item in currentHistory"
            :key="item[1]"
          >
            <div
              class="history-slide"
              v-on:click="setCurrentGoods(item[0], item[1])"
            >
              <img
              class="img-slide"
              :src="clothesData[item[0]][item[1]].images[0]"
              />
              <div class="history-short-info">
                <p class="history-name">{{clothesData[item[0]][item[1]].name}}</p>
                <p class="history-price">{{clothesData[item[0]][item[1]].price + ' ₽'}}</p>
              </div>
            </div>
        </Slide>



      </Car>
    </div>
  </div>
</template>

<script>
import { Carousel as Car, Slide } from 'vue-carousel';
import { clothesData } from '../data';
import CurrentGoodsComponent from '@/components/app/CurrentGoodsComponent';


export default {
  name: 'CurrentGoods',
  components: {
    Car, Slide, CurrentGoodsComponent
  },
  data () {
    const offers = [clothesData['tshirt']['nikePro'], clothesData['hoodie']['casual'], clothesData['tshirt']['nike']];

    return {
      clothesData,
      offers,
    }
  },
  computed: {
    currentGoods () {
      if(this.$store.getters.getCurrentGoods) {
        return this.$store.getters.getCurrentGoods
      } else {
        return 'nigeria';
      }
    },
    currentHistory () {
      if(this.$store.getters.getHistory) {
        return this.$store.getters.getHistory
      } else {
        return 'nigeria';
      }
    }
  },
  methods: {
    setCurrentGoods (category, item) {
      this.$store.commit('setCurrentGoods', [category, item]);
      this.$store.commit('addNewItemToHistory', [category, item]);
      this.$store.commit('setCurrentItem', category)
      while (Math.max(document.body.scrollTop,document.documentElement.scrollTop) > 0) {
        window.scrollBy(0,-100);
      }
    },

  },
  created () {
    this.$store.commit('getCurrentGoodsFromStorage');
    this.$store.commit('getHistoryFromStorage');
  }
}
</script>
