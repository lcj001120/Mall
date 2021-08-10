<template>
  <div class="recommend">
    <div v-for= "item in recommends" :key="item.link" class="recommend-item">
      <a :href= "item.link"></a>
        <img :src= "item.image" alt="">
        <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>

export default({
  name: "RecommendView",
  data() {
    // item:0
    return {
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    recommend(){
      console.log(this.recommends);
    }
  }
})

</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15px;
  font-family: initial;
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex: 1
}
.recommend-item img{
  width: 73px;
  height: 73px;
  margin-bottom: 10px;
}
</style>