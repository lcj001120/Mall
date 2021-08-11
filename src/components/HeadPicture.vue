<template>
  <div class="position">
    <div class="block">
      <el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><br>
      <span>用户昵称</span>
      <br><br><br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data () {
      return {
      }
    }
}
</script>

<style scoped>
.position{
  /* position: absolute; */
  text-align: center;
  padding-top: 50px;
  border-bottom: 3px solid #eee;
  /* font-size: 50px; */
  /* align-content: center; */
}
.position span{
  font-size: 15px;
  font-family:fantasy;
  padding: auto;
}

</style>