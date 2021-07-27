<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view />
  </div>
</template>

<script>
import TabBar from './views/TabBar.vue'


export default {
  name: 'App',
  components: {
    TabBar
  }
}
    

</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-size: 12px;
}

</style>
