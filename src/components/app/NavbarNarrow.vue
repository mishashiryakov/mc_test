<template>
  <div class="nav-wrapper">

    <div
        @click="openMenu"
        class="burger"
    >
      <img src="../../assets/icons/burger.png" class="burger-img">
    </div>

    <div class="logo">
      <router-link
        to="/"
      >
        <img class="icon" src="../../assets/icons/nike-logo.png" />
      </router-link>
    </div>

    <Drawer
      title="Basic Drawer"
      placement="left"
      v-model="menu"
      width="100"
      :mask="false"

    >
    <!-- <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
    </router-link> -->

  <Menu class="menu-narrow" :accordion="true" :open-names="['1']">

        <Submenu name="Одежда">
            <template slot="title">Одежда</template>

            <router-link
              class="router-link-custom"
              :to="item.url"
              v-for="item in clothes"
              :key="item.title"
            >
              <MenuItem :name="item.title">
                {{item.title}}
              </MenuItem>
            </router-link>

        </Submenu>

        <Submenu name="Акссесуары">
            <template slot="title">Акссесуары</template>
            <router-link
              class="router-link-custom"
              :to="item.url"
              v-for="item in accesories"
              :key="item.title"
            >
              <MenuItem :name="item.title">
                {{item.title}}
              </MenuItem>
            </router-link>

        </Submenu>

        <Submenu name="Коллекции">
            <template slot="title">Коллекции</template>
            <router-link
              class="router-link-custom"
              :to="item.url"
              v-for="item in collections"
              :key="item.title"
            >
              <MenuItem :name="item.title">
                {{item.title}}
              </MenuItem>
            </router-link>
        </Submenu>



    </Menu>


    </Drawer>


    <div id="easynetshop-cart">
        <div id="enscart_my_wrapper">
          <div id="enscart_myimage_wrapper">
            <img class="icon" @click="openCart = !openCart" src="../../assets/icons/cart.png">
          </div>
          <div id="enscart_my_counter_wrapper" v-if="getCartData.length"><span  id="easynetshop-cart-count"> {{getCartData.length}} </span></div>
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
    }
  },
  mounted () {
    console.log('mounted navbar narrow')
    document.querySelectorAll('.ivu-menu-item').forEach((el) => {
      el.addEventListener('click', (e) => {
        console.log(e.currentTarget.innerHTML)
        let item;

        switch (e.currentTarget.innerHTML.trim()) {
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
      })
    })
  },
  methods: {
    navBtnClick () {
      this.openCart = !this.openCart
    },
    openMenu () {
      console.log('123')
      this.menu = !this.menu;
    },
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
