<template>
<div class="slideshow">
  <div class="slideshowCenter">
      <el-carousel :interval="5000" arrow="always" indicator-position="none">
          <el-carousel-item v-for="item in 3" :key="item">
               <img src="@/assets/img/banner.jpg"/>
          </el-carousel-item>
      </el-carousel>
  </div>
  <div class="productInfor">
    <div class="productInforC">
      <div class="photo">

      </div>
      <div class="product">
        <p>泸州老酒坊-岁月珍藏</p>
        <p><span class="kongge">价格</span>
           <span></span>/箱
        </p>
        <p><span class="kongge">规格</span></p>
         <p><span class="kongge">酒精</span></p>
        <p><span>生产厂商</span>泸州老窖服务有限责任公司</p>
        <p><span>全国运营商</span>龙腾岁月(天津)贸易有限公司</p>
      </div>

    </div>
  </div>
</div>
</template>

<script>

import { mapState,mapActions } from "vuex";
export default {
  data(){
    return {

    }
  },
   created() {
    this.homeRequest()
  },
  methods:{
    ...mapActions('home',['homeRequest'])
  }
}
</script>

<style lang="less" scoped>
.slideshow{
  width:100%;
  background: #f5f5f5;
  padding-top:15px;
  .slideshowCenter{
    width:1200px;
    margin:0 auto;
  }
  .productInfor{
    width:100%;
    height: 400px;
    padding-bottom: 20px;
    .productInforC{
      width:1200px;
      height: 100%;
      margin: 0 auto;
      background: #fff;
      display:flex;
      justify-content: space-between;
      .photo{
        width:560px;
        height:100%;
      }
      .product{
        width:640px;
        height:100%;
        p{
          margin-top:30px;
          font-size: 14px;
          color: #333333;
          span{
            color:#999999;
            margin-right:20px;
          }
          .kongge{
            letter-spacing:30px;
          }
        }
        p:nth-of-type(1){
          font-size:20px;
          color: #333333;
          font-weight: 600;
        }
      }
    }
  }
}
</style>


