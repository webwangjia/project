<template>
  <div class="homeWrap">
      <div class="bannerWrap">
        <el-carousel 
        indicator-position="none"
        height="300px"
        >
           <el-carousel-item v-for="(item,index) in 3" :key="index">
              <img src="@/assets/img/banner.jpg"/>
            </el-carousel-item>
        </el-carousel>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="less" scoped>
.homeWrap{
  width:1200px;
  margin:0px auto;
  padding-top:20px;
  .bannerWrap{
    
  }
}
</style>
