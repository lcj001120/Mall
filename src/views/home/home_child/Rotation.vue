<template>
    <div class="index">
        <!-- 跑马灯  -->
        <div>   
            <!-- <el-carousel :interval="4000" type="card" height="200px" width=1> -->
              <el-carousel height="200px" autoplay>
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
                {id:0,idView:'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg'},
                {id:1,idView:'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg'},
                {id:2,idView:'https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg'},
                {id:3,idView:'https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg'}            
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

  .image{
    width: 100%;
    height: 200px;
  }
</style>