<template>
  <div class="photo">
    <div class="photoCenter">  
      <div class="loginBox"> 
          <div class="loginBoxC">
            <h3>账户登录</h3>
            <div class="loginForm">
              <el-input placeholder="请输入手机号"></el-input>
              <el-input  placeholder="请输入手机验证码" type="text" class="captcha"></el-input>
              <el-button class="captchaGet" >获取验证码</el-button>
              <el-input  placeholder="设置密码" type="password"></el-input>
              <el-input  placeholder="请确认密码" type="password"></el-input>
              <el-button >注册并登录</el-button>
            </div>
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
          padding-top:35px;
          h3{
            color:red;
          }
          .loginForm{
            margin-top: 5px;
            .el-input{
              outline: none;
              border:none;
              margin-top:25px;
            }
            .captcha{
              width:65%;
            }
            .el-button--default{
              width:100%;
              margin-top:20px;
              background: #dd2a17;
              color:#fff;
              &:hover{
                background:red;
              }
            }
            .captchaGet{
              width:35%;
              margin-left:-5px;

            }
          }
        }
    }
  }
 
}

</style>