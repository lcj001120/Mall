<template>
  <div id="home">
    <home-nav-bar class="nav-bar"></home-nav-bar>
    <rotation></rotation>
    <recommend-view :recommends ="recommends"></recommend-view>
    <future-view></future-view>
    <tab-control class="tab-position" :titles="['流行','新款','精选']"></tab-control>
    <!-- <goods-list :goods="goods['pop'].list"></goods-list> -->
    <goods-list :goods = "goods['pop'].list"></goods-list>
    <loading></loading>
  </div>
</template>

<script>
import RecommendView from './home_child/RecommendView.vue'
import Rotation from './home_child/Rotation.vue'
import FutureView from './home_child/FutureView.vue'
import TabControl from '../../components/TabControl.vue'

import { getHomeMultidata , getHomeGoods } from '../../network/home.js'
import GoodsList from '../../components/GoodsList.vue'
import HomeNavBar from './home_child/Home-NavBar.vue'
import Loading from './home_child/Loading.vue'

export default {
  name: "Home",
  components: { 
    Rotation,
    RecommendView,
    FutureView,
    TabControl,
    GoodsList,
    HomeNavBar,
    Loading,
  },
  data() {
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': {page:0 ,list:[]},
        'new': {page:0 ,list:[]},
        'sell': {page:0 ,list:[]},
      }
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.recommends);
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        // this.goods[type].list.push(...res.data.list)
        // this.goods[type].page += 1
        console.log(res)
    })
    }
  },
}
</script>

<style scoped>
.nav-bar{
  background-color:rgb(124, 217, 240);
  color: white;
  font-size: 16px;
}
/* .tab-position{
  position:sticky;
  top:100px;
} */
</style>