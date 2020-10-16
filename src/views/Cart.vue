<template>
  <div class="about">
    <h1>Список товаров:</h1>
    <ul>
      <li
      v-for="item in items"
      class="item"
      :key="item.title"
      >
      {{ item.title }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'cart',
  computed: {
    items () {
      if(this.$store.getters.getCartData) {
        return this.$store.getters.getCartData
      } else{
        return [{title: 'Корзина пуста'}]
      }
    }
  },
  created () {
    this.$store.commit('getDataFromStorage')
  }
}
</script>
