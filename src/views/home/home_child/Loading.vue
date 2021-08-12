<template>
<div class="size" v-loading="loading">
</div>
</template>

<script>
export default {
  name:"Loading",
  data() {
    return{
      loading: true
    }
  }
}
</script>

<style scoped>
.size{
  width: 100%;
  height: 200px;
}
</style>
