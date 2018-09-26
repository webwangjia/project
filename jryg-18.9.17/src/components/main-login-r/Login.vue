<template>
  <div class="photo">
    <div class="photoCenter">  
      <div class="loginBox"> 
          <div class="loginBoxC">
            <h3>账户登录</h3>
            <div class="loginForm">
              <el-input placeholder="请输入手机号"></el-input>
              <el-input  placeholder="请输入密码" type="password"></el-input>
              <el-button >登录</el-button>
            </div>
            <div class="loginBottom">
                <router-link to="/forget">忘记密码</router-link>
                <router-link to="/register">免费注册</router-link>
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
            margin-top: 20px;
            .el-input{
              outline: none;
              border:none;
              margin-top:25px;
            }
            .el-button--default{
              width:100%;
              margin-top:40px;
              background: #dd2a17;
              color:#fff;
              &:hover{
                background:red;
              }
            }
          }
          .loginBottom{
            margin-top:20px;
            font-size:15px;
          }
        }
    }
  }
 
}

</style>