<template>
  <select-nav-bar class="nav-bar"></select-nav-bar>
</template>

<script>
import SelectNavBar from './select_child/Select-NavBar.vue'
export default {
  components: { SelectNavBar },
  name: "Select"
}
</script>

<style scoped>
.nav-bar{
  background-color:rgb(124, 217, 240);
  color: white;
  font-size: 16px;
}
</style>