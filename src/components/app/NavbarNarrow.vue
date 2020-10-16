<template>
  <div class="nav-wrapper">

    <div class="burger hamburger hamburger--squeeze">
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>

    <div class="logo">
      <router-link
        to="/"
      >
        <img class="icon" src="../../assets/icons/nike-logo.svg" />
      </router-link>
    </div>

    <Drawer
      placement="left"
      v-model="menu"
      width="100"
      :mask="false"
    >
      <Menu class="menu-narrow" :accordion="true" :open-names="['1']">
        <Submenu name="Одежда">
          <template slot="title">Одежда</template>
          <MenuItem
            v-for="item in clothes"
            :name="item.title"
            :key="item.title"
          >
            <router-link
              class="router-link-custom"
              :to="item.url"
            >
              {{item.title}}
            </router-link>
          </MenuItem>
        </Submenu>

        <Submenu name="Акссесуары">
          <template slot="title">Акссесуары</template>
          <MenuItem :name="item.title"  v-for="item in accesories"
          :key="item.title">
            <router-link
              class="router-link-custom"
              :to="item.url"
            >
            {{item.title}}
            </router-link>
          </MenuItem>
        </Submenu>

        <Submenu name="Коллекции">
          <template slot="title">Коллекции</template>

          <MenuItem
            :name="item.title"
            v-for="item in collections"
            :key="item.title"
          >
            <router-link
            class="router-link-custom"
            :to="item.url"
            >
            {{item.title}}
            </router-link>
          </MenuItem>
        </Submenu>
      </Menu>
    </Drawer>


      <div id="easynetshop-cart">
        <div id="enscart_my_wrapper">
          <div id="enscart_myimage_wrapper">
            <img class="icon" @click="openCart = !openCart" src="../../assets/icons/cart.svg">
          </div>
          <div id="enscart_my_counter_wrapper" v-if="getCartData.length"><span  id="easynetshop-cart-count"> {{getCartData.length}} </span></div>
        </div>
      </div>

      <Drawer
        :closable="false"
        v-model="openCart"
        :width="this.width"
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

        <div class="total-sum-block">
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


    </Drawer>



  </div>
</template>


<script>
import ItemInCart from '@/components/app/ItemInCart';
import { Button, Drawer, Menu, Submenu, MenuItem, MenuGroup } from 'view-design';
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar-narrow',
  components: {
    Button, Drawer, ItemInCart, Menu, Submenu, MenuItem, MenuGroup
  },
  data () {
    return {
      menu: false,
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
      width: null,
      preTotalSum: 0,
    }
  },
  mounted () {
    document.querySelectorAll('.ivu-menu-item').forEach((el) => {
      el.addEventListener('click', (e) => {
        let item;

        switch (e.currentTarget.firstChild.innerHTML.trim()) {
          case 'Футболки':
            item = 'tshirt';
            break;
          case 'Худи':
            item = 'hoodie';
            break;
          case 'Air Zoom':
            item = 'airzoom';
            break;
        }
        this.setCurrentItem(item)
        this.menu = !this.menu;
        document.querySelector('.hamburger--squeeze').classList.remove('is-active')
      })
    })

    document.querySelector('.hamburger--squeeze').addEventListener('click', (event) => {
      this.openMenu()
      const burger = event.currentTarget.classList;
      if (!burger.contains('is-active')) {
        burger.add('is-active')
      } else {
        burger.remove('is-active')
      }

    })
  },
  methods: {
    openMenu () {
      this.menu = !this.menu;
    },
    setCurrentItem (name) {
      this.$store.commit('setCurrentItem', name)
    },
    updateWidth() {
      if (window.innerWidth <= 548) {
        this.width = 100;
      } else {
        this.width = 548;
      }

    },
    getTotalPrice (price) {
      if (price.symbol == '+') {
        this.preTotalSum += price.price
      }

      if (price.symbol == '-') {
        this.preTotalSum -= price.price
      }
    }
  },
  computed: {
  ...mapGetters([
    'getCartData'
  ]),
  cartItems () {
    if(this.$store.getters.getCartData) {
      return this.$store.getters.getCartData
    }
   }
  },
  created() {
    this.$store.commit('getDataFromStorage');
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  }
}
</script>
