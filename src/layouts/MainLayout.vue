<template>
  <div class="main-layout">
    <Navbar />
    <router-view />
  </div>
</template>

<script>

import Navbar from '@/components/app/Navbar'
export default {

  name: 'main-layout',
  components: {
    Navbar
  }
}
</script>
