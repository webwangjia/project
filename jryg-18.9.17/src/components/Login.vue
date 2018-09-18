<template>
  <div class="photo">
    <div class="photoCenter">  
      <div class="loginBox">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:{
    return:{

    }
  }
}
</script>


<style lang="less" scoped>
.photo{
  width:100%;
  height:480px;
  background-image: url("../assets/img/banner.png") no-repeat center center;
  background-size:1920px  480px;
  margin:0 auto;
  .photoCenter{
    width:1200px;
    height:100%;
    margin: 0 auto;
    padding-top:30px;
    padding-right:50px;
     .loginBox{
        float: right;
        width:343px;
        height: 406px;
        background: #fff;
  }
  }
 
}

</style>