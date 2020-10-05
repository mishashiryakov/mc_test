<template>
<div>
  <h1>This is an Home page</h1>

  <ul class="items-container">
    <li
      v-for="item in items"
      @click="addItem(item)"
      class="item"
      :key="item.title"
      >
      {{item.title}}</li>

  </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      items: [
          {title: 'Худи'},
          {title: 'Майка'},
          {title: 'Джинсы'}
        ]
    }

  },
  methods: {
    addItem (item) {
      this.$store.commit('addNewItem', item)
    }
  }
}
</script>
