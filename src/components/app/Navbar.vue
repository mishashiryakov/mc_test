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
      <router-link
        to="/cart"
      >
        <img class="icon" src="../../assets/icons/cart .png" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem, Icon } from 'view-design'
export default {
  name: 'Navbar',
  components: {
    Dropdown, DropdownMenu, DropdownItem, Icon
  },
  data () {
    return {
      visible: false,
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
        {title: 'Air Max', url: '/goods', name: 'airmax'},
        {title: 'Dry Fit', url: '/goods', name: 'dryfit'},
        {title: 'Zoom', url: '/goods', name: 'zoom'},
      ],
      name: null,
    }
  },
  methods: {
    handleOpen () {
      this.visible = true;
    },
    handleClose () {
      this.visible = false;
    },
    setCurrentItem (name) {
      console.log('HI', name)
      this.$store.commit('setCurrentItem', name)
    }
  }
}
</script>
