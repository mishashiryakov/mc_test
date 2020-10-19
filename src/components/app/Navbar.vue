<template>
  <div class="nav-wrapper">

    <div class="logo">
      <router-link
        to="/"
      >
        <img class="icon" src="../../assets/icons/nike-logo.svg" />
      </router-link>

    </div>

    <div class="dropdown-block">
      <Dropdown  v-on:on-click="setCurrentItem($event)">
        <a href="javascript:void(0)">
            Одежда
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <Dropdown-item
              v-for="item in clothes"
              :key="item.title"
              :name="item.name"
            >
              <router-link
                :to="item.url"
              >
                {{item.title}}
              </router-link>
            </Dropdown-item>
        </DropdownMenu>
      </Dropdown>

      <Dropdown v-on:on-click="setCurrentItem($event)">
        <a href="javascript:void(0)">
            Акссесуары
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <Dropdown-item
              v-for="item in accesories"
              :key="item.title"
              :name="item.name"
            >
              <router-link
                :to="item.url"
              >
                {{item.title}}
              </router-link>
            </Dropdown-item>
        </DropdownMenu>
      </Dropdown>

      <Dropdown v-on:on-click="setCurrentItem($event)">
        <a href="javascript:void(0)">
            Коллекции
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <Dropdown-item
              v-for="item in collections"
              :key="item.title"
              :name="item.name"
            >
              <router-link
                :to="item.url"
              >
                {{item.title}}
              </router-link>
            </Dropdown-item>
        </DropdownMenu>
      </Dropdown>
    </div>

    <div class="search-block">
      <img class="icon" src="../../assets/icons/search.svg" />
      <div id="easynetshop-cart">
        <div id="enscart_my_wrapper">
          <div id="enscart_myimage_wrapper">
            <img class="cart-icon" @click="openCartFunc" src="../../assets/icons/cart.svg">
          </div>
          <div id="enscart_my_counter_wrapper" v-if="getCartData.length"><span  id="easynetshop-cart-count"> {{getCartData.length}} </span></div>
        </div>
      </div>

    </div>

    <Drawer
      :closable="false"
      v-model="openCart"
      width="548"
    >
        <div class="cart-header">
          <p class="cart-title">Твоя корзина</p>
          <div class="cart-close" @click="openCart = !openCart">
            <img src="../../assets/icons/close.svg" />
          </div>

        </div>

        <div
          v-if="getCartData.length"
          class="item-cart-block"
        >
          <ItemInCart
            @price="getTotalPrice"
            v-for="(item, index) in cartItems"
            :key="index"
            :goods="[...item, index]"
          />

        </div>

        <div
          class="total-sum-block"
          v-if="getCartData.length"
        >
          <div class="total">
            <p class="total-sum">
              Предварительный итог:
            </p>
            <p class="total-price">{{this.preTotalSum + " ₽"}}</p>
          </div>

          <div class="checkout-button">
            Оформить заказ
          </div>
        </div>

        <p
          v-if="!getCartData.length"
        >
          Ваша корзина пуста
        </p>

    </Drawer>

  </div>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem, Icon, Drawer } from 'view-design'
import ItemInCart from '@/components/app/ItemInCart'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    Dropdown, DropdownMenu, DropdownItem, Icon, Drawer, ItemInCart
  },
  data () {
    return {
      openCart: false,
      clothes: [
        { title: 'Футболки', url: '/goods', name: 'tshirt' },
        { title: 'Худи', url: '/goods', name: 'hoodie' },
        { title: 'Шорты', url: '/goods', name: 'short' }
      ],
      accesories: [
        { title: 'Кепки', url: '/goods', name: 'cap' },
        { title: 'Сумки', url: '/goods', name: 'bag' }
      ],
      collections: [
        { title: 'Air Zoom', url: '/goods', name: 'airzoom' },
        { title: 'Dry Fit', url: '/goods', name: 'dryfit' },
        { title: 'Zoom', url: '/goods', name: 'zoom' }
      ],
      name: null,
      preTotalSum: 0
    }
  },

  methods: {
    setCurrentItem (name) {
      this.$store.commit('setCurrentItem', name)
    },
    getTotalPrice (price) {
      if (price.symbol === '+') {
        this.preTotalSum += price.price
      }

      if (price.symbol === '-') {
        this.preTotalSum -= price.price
      }
    },
    openCartFunc () {
      this.preTotalSum = 0
      this.openCart = !this.openCart
      setTimeout(() => {
        document.querySelectorAll('.cart-price').forEach(el => {
          this.preTotalSum += +el.innerHTML.substring(0, el.innerHTML.length - 2).trim()
        })
      }, 10)
    }
  },
  computed: {
    ...mapGetters([
      'getCartData'
    ]),
    cartItems () {
      if (this.$store.getters.getCartData) {
        return this.$store.getters.getCartData
      } else {
        return ''
      }
    }
  },
  created () {
    this.$store.commit('getDataFromStorage')
  }
}
</script>
