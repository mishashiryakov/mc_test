<template>
  <div class="nav-wrapper">

    <div class="logo">
      <router-link
        to="/"
      >
        <img class="icon" src="../../assets/icons/nike-logo.png" />
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
      <img class="icon" src="../../assets/icons/search.png" />

      <!-- <div>
        <img
          class="icon"
          src="../../assets/icons/cart.png"
          @click="openCart = !openCart"
        />
      </div> -->

      <div id="easynetshop-cart">
        <div id="enscart_my_wrapper">
          <div id="enscart_myimage_wrapper">
            <img class="icon" @click="openCart = !openCart" src="../../assets/icons/cart.png">
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
            <img src="../../assets/icons/close.png" />
          </div>

        </div>
        <div
          v-if="getCartData.length"
          class="item-cart-block"
        >
          <ItemInCart
              v-for="(item, index) in cartItems"
              :key="index"
              :goods="[...item, index]"
          />
        </div>


    </Drawer>

  </div>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem, Icon, Drawer } from 'view-design';
import ItemInCart from '@/components/app/ItemInCart';
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
        {title: 'Футболки', url: '/goods', name: 'tshirt'},
        {title: 'Худи', url: '/goods', name: 'hoodie'},
        {title: 'Шорты', url: '/goods', name: 'short'},
      ],
      accesories: [
        {title: 'Кепки', url: '/goods', name: 'cap'},
        {title: 'Сумки', url: '/goods', name: 'bag'},
      ],
      collections: [
        {title: 'Air Zoom', url: '/goods', name: 'airzoom'},
        {title: 'Dry Fit', url: '/goods', name: 'dryfit'},
        {title: 'Zoom', url: '/goods', name: 'zoom'},
      ],
      name: null,
    }
  },

  methods: {
    setCurrentItem (name) {
      console.log('HI', name)
        this.$store.commit('setCurrentItem', name)
    }
  },
  computed: {
    ...mapGetters([
      'getCartData'
    ]),
    cartItems () {
      console.log('computed')
      if(this.$store.getters.getCartData) {
        return this.$store.getters.getCartData
      }
    }
  },
  created() {
    this.$store.commit('getDataFromStorage')
  }
}
</script>
