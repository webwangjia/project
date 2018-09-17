<template>
<div class="slideshow">
  <div class="slideshowCenter">
      <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 3" :key="item">
               <img src="@/assets/img/banner.jpg"/>
          </el-carousel-item>
      </el-carousel>
  </div>
</div>
</template>


<script>
export default {
  data(){
    return {

    }
  }
}
</script>


<style lang="less" scoped>
.slideshow{
  width:100%;
  height:316px;
  background: #fff;
  .slideshowCenter{
    width:1200px;
    height:100%;
    margin:0 auto;
  }
}

</style>


