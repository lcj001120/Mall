<template>
  <div class="goods">
    <!-- {{goods}} -->
  </div>
</template>

<script>

export default ({
  name: "GoodsList",
  props: {
    type: Array,
    default() {
      return []
    }
  }
})
</script>

<style scoped>

</style>