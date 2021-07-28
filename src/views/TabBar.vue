<template>
  <div id="tab-bar">
    <div class="tab-bar-item" @click="ItemClick" path="/home">
      <img v-if="!isActive" src="../assets/img/tabbar/home.svg">
      <img v-else src="../assets/img/tabbar/home-active.svg">
      <div :class="{active: isActive}">首页</div>
    </div>
    <div class="tab-bar-item" @click="ItemClick" path="/select">
      <img v-if="!isActive" src="../assets/img/tabbar/select.svg">
      <img v-else src="../assets/img/tabbar/select-active.svg">
      <div :class="{active: isActive}">分类</div>
    </div>
    <div class="tab-bar-item" @click="ItemClick" path="/category">
      <img v-if="!isActive" src="../assets/img/tabbar/category.svg">
      <img v-else src="../assets/img/tabbar/category-active.svg">
      <div :class="{active: isActive}">购物车</div>
    </div>
    <div class="tab-bar-item" @click="ItemClick" path="/profile">
      <img v-if="!isActive" src="../assets/img/tabbar/profile.svg">
      <img v-else src="../assets/img/tabbar/profile-active.svg">
      <div :class="{active: isActive}">个人</div>
    </div>
  </div>
</template>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgb(100, 100, 100, 0.1);
}
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  /* vertical-align: middle; */
}
.active{
  color:rgb(185, 17, 129);
}
</style>

<script>
export default {
  name:"TabBar",
  props:{
    path:String
  },
  data(){
    return{
      isActive: false
    }
  },
  // compute: {
  //   isActive() {
  //     return this.$route.path.indexOf(this.path)
  //   }
  // },
  methods:{
    ItemClick(){
      console.log('click')
      this.$router.push(this.path)
    }
  }
}
</script>