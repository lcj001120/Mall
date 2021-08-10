<template>
  <div class="position">
    <el-divider></el-divider>
    <div class="el-icon-s-help"><span>    通用</span><div class="el-icon-caret-right"></div></div><br>
    <el-divider></el-divider>
    <div class="el-icon-user-solid"><span>    个人信息</span><div class="el-icon-caret-right"></div></div><br>
    <el-divider></el-divider>
    <div class="el-icon-s-goods"><span>    钱包</span><div class="el-icon-caret-right"></div></div><br>
    <el-divider></el-divider>
    <div class="el-icon-s-tools"><span>    设置</span><div class="el-icon-caret-right"></div></div><br>
    <el-divider></el-divider>
  </div>
</template>

<style scoped>
  .position{
    position:absolute;
    top:200px;
  }
  .el-icon-caret-right{
    /* position:absolute; */
    font-size: 20px;
    right: 0;
  }
  .el-icon-s-help .el-icon-user-solid .el-icon-s-goods .el-icon-s-tools{ 
    /* position:absolute; */
    font-size: 20px;
    padding: 20px;
  }
</style>

<script>

export default({
  data(){
    return{

    }
  }
})
</script>
