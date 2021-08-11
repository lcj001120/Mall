<template>
  <div class="tab-control">
    <div v-for="(item , index) in titles" :key="item" 
    class="tab-control-item" 
    :class="{active: index === currentIndex}" 
    @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      console.log(index);
    }
  },
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active{
  color: rgb(185, 17, 129);
}
.active span{
  border-bottom: 3px solid rgb(185, 17, 129);
  padding: 3px;
}
</style>