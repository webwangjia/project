<template>
  <div class="photo">
    <div class="photoCenter">  
      <div class="loginBox"> 
          <div class="loginBoxC">
            <h3>账户登录</h3>
            <el-input  placeholder="请输入您登录账号" class="one"></el-input>
            <el-input type="password" placeholder="请输入您登录密码"></el-input>
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
     .loginBox{
        float: right;
        width:343px;
        height: 406px;
        background: #fff;
        .loginBoxC{
          width:285px;
          height:100%;
          margin:0 auto;
          h3{
            color:red;
          }
         .el-input__inner{
            margin-top:30px;
            outline: none;
            border: none;
          }
        }
    }
  }
 
}

</style>