<template>
  <div id="tab-bar">
    <div class="tab-bar-item" @click="gohome">
      <!-- <router-link to="home" replace tag="none"> -->
      <img v-if="!isActive1" src="../assets/img/tabbar/home.svg">
      <img v-else src="../assets/img/tabbar/home-active.svg">
      <div :class="{active: isActive1}">首页</div>
    <!-- </router-link> -->
    </div>
    <div class="tab-bar-item" @click="goselect">
    <!-- <router-link to="select" replace tag="none"> -->
      <img v-if="!isActive2" src="../assets/img/tabbar/select.svg">
      <img v-else src="../assets/img/tabbar/select-active.svg">
      <div :class="{active: isActive2}">分类</div>
    <!-- </router-link> -->
    </div>
    <div class="tab-bar-item" @click="gocategory">
      <!-- <router-link to="category" replace tag="none" > -->
      <img v-if="!isActive3" src="../assets/img/tabbar/category.svg">
      <img v-else src="../assets/img/tabbar/category-active.svg">
      <div :class="{active: isActive3}">购物车</div>
    <!-- </router-link> -->
    </div>
    <div class="tab-bar-item" @click="goprofile">
      <!-- <router-link to="profile" replace tag="none"> -->
      <img v-if="!isActive4" src="../assets/img/tabbar/profile.svg">
      <img v-else src="../assets/img/tabbar/profile-active.svg">
      <div :class="{active: isActive4}">个人</div>
    <!-- </router-link> -->
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
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false
    }
  },
  methods:{
    gohome(){
      this.$router.replace('/home'),
      this.isActive1= true,
      this.isActive2= false,
      this.isActive3= false,
      this.isActive4= false
    },
    goselect(){
      this.$router.replace('/select'),
      this.isActive1= false,
      this.isActive2= true,
      this.isActive3= false,
      this.isActive4= false
    },
    goprofile(){
      this.$router.replace('/profile'),
      this.isActive1= false,
      this.isActive2= false,
      this.isActive3= false,
      this.isActive4= true
    },
    gocategory(){
      this.$router.replace('/category'),
      this.isActive1= false,
      this.isActive2= false,
      this.isActive3= true,
      this.isActive4= false
    },
    // itemClick1(){
    //   this.isActive1=!this.isActive1
    // },
    // itemClick2(){
    //   this.isActive2=!this.isActive2
    // },
    // itemClick3(){
    //   this.isActive3=!this.isActive3
    // },
    // itemClick4(){
    //   this.isActive4=!this.isActive4
    // }
  },
  // compute: {
  //   isActive() {
  //     return this.$route.path.indexOf('/home')
  //   }
  // },
  // methods:{
  //   ItemClick(){
  //     console.log('click')
  //     this.$router.push(this.path)
  //   }
  // }
}
</script>