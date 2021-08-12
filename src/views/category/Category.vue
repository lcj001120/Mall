<template>
  <nav-bar class="nav-bar">购物车</nav-bar>
</template>

<script>
import NavBar from './category_child/Category-NavBar.vue'
export default {
  components: { NavBar },
  name: "Category"
}
</script>

<style scoped>
.nav-bar{
  background-color:rgb(124, 217, 240);
  color: white;
  font-size: 16px;
}
</style>