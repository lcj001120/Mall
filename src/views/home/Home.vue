<template>
  <div id="home">
    <nav-bar class="vav-bar">购物街</nav-bar>
    <rotation></rotation>
    <recommend-view :recommends ="recommends"></recommend-view>
    <future-view></future-view>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
import RecommendView from './home_child/RecommendView.vue'
import Rotation from './home_child/Rotation.vue'

import {getHomeMultidata} from '../../network/home.js'
import FutureView from './home_child/FutureView.vue'

export default {
  name: "Home",
  components: { 
    NavBar,
    Rotation,
    RecommendView,
    FutureView,
  },
  data() {
    return{
      banners: [],
      recommends: [],
    }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.recommends);
    })
  },
  
}
</script>

<style scoped>
.nav-bar{
  background-color:rgb(124, 217, 240);
  color: white;
  font-size: 16px;
}

</style>