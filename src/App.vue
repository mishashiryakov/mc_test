<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import NarrowLayout from '@/layouts/NarrowLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  name: 'App',
  components: {
    NarrowLayout, MainLayout
  },
  computed: {
    layout () {
      if (this.width < 800) {
        return 'narrow-layout'
      } else {
        return 'main-layout'
      }
    }
  },
  data () {
    return {
      width: null
    }
  },
  created () {
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  },
  methods: {
    updateWidth () {
      this.width = window.innerWidth
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/comon.scss';
</style>
