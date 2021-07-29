<template>
  <div id="home">
    <nav-bar class="vav-bar">购物街</nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import {getHomeMultidata} from '../../network/home.js'
export default {
  components: { NavBar },
  created(){
    getHomeMultidata().then(res => {
      console.log(res);
    })
  },
  name: "Home"
}
</script>

<style scoped>
.nav-bar{
  background-color:rgb(124, 217, 240);
  color: white;
  font-size: 16px;
}

</style>