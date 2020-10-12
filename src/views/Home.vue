<template>
<div class="home-block">
  <img class="home-img" src="../assets/main.jpg" />
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
