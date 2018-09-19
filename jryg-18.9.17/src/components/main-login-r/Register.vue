<template>
   <div class="photo">
    <div class="photoCenter">  
      <div class="registerBox"> 
          <div class="registerBoxC">
           注册页
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>


<style lang="less" scoped>
.photo{
  width:100%;
  height:480px;
  background: url("../../assets/img/banner.png") no-repeat center center;
  background-size:1920px  480px;
  margin:0 auto;
  .photoCenter{
    width:1200px;
    height:100%;
    margin: 0 auto;
    padding-top:30px;
    padding-right:50px;
     .registerBox{
        float: right;
        width:343px;
        height: 406px;
        background: #fff;
        .registerBoxC{
          width:285px;
          height:100%;
          margin:0 auto;
        }
  }
  }
 
}

</style>