<template>
  <div class="narrow-layout">
    <NavbarNarrow />

    <router-view />
  </div>
</template>

<script>
import NavbarNarrow from '@/components/app/NavbarNarrow'
export default {
  name: 'narrow-layout',
  components: {
    NavbarNarrow
  }
}
</script>
