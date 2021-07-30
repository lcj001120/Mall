<template>
    <div class="index">
        <!-- 跑马灯  -->
        <div>   
            <!-- <el-carousel :interval="4000" type="card" height="200px" width=1> -->
              <el-carousel height="150px">
                <el-carousel-item v-for="item in imgList" :key="item.id">
                     <img :src="item.idView" class="image">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data(){
        return {
            imgList: [
                {id:0,idView:'../assets/img/rotation/p1.jpg'},
                {id:1,idView:'../assets/img/rotation/p1.jpg'},
                {id:2,idView:'../assets/img/rotation/p1.jpg'},
                {id:3,idView:'../assets/img/rotation/p1.jpg'}            
            ]
        };
        },
    methods: { 
    }
}
</script>
<style>
  .index{
    background: #c8cfd8;
    width: 1;
    text-align: center;
    margin-left: 0;
   
    
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>