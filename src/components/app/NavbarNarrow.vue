<template>
  <div>
    <div  >

    </div>

   <Button @click="navBtnClick" type="primary" class="burger"><img src="../../assets/icons/burger.png" class="burger-img"></Button>
    <Drawer
      title="Basic Drawer"
      placement="left"
      :closable="false"
      v-model="value2"
      width="500"
    >
       <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <button href="#" class="waves-effect waves-orange pointer">{{link.title}}</button>
    </router-link>
    </Drawer>

  </div>
</template>


<script>
import { Button, Drawer } from 'view-design'
  export default {
    name: 'Navbar-narrow',
    components: {
      Button, Drawer
    },
    data () {
      return {
        value2: false,
        links: [
          {title: 'HOME', url: '/',},
          {title: 'ABOUT', url: '/about'},
          {title: 'Cart', url: '/cart'}
        ]
      }
    },
    methods: {
      navBtnClick () {
        this.value2 = !this.value2
      }
    }
  }
</script>
