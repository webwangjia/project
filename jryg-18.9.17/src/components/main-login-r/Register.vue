<template>
  <div class="photo">
    <div class="photoCenter">  
      <div class="loginBox"> 
          <div class="loginBoxC">
            <h3>账户登录</h3>
            <div class="loginForm">
              <el-form :model="registerData"
                    status-icon
                    :rules="rulesRegister"
                    validateField
                    ref="registerRef"
                    class="demo-ruleForm">
                <el-form-item  prop="username">
                  <el-input type="text" v-model="registerData.username" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item class="captcha">
                   <el-input  placeholder="请输入手机验证码" type="text" ></el-input>
                </el-form-item>
                <el-button class="captchaGet" >获取验证码</el-button>
                <el-form-item prop="password">
                   <el-input type="password" v-model="registerData.password" placeholder="设置密码" ></el-input>
                </el-form-item>
                <el-form-item>
                   <el-input  placeholder="请确认密码" type="password"></el-input>
                </el-form-item>
                <el-button >注册并登录</el-button>
              </el-form>
              
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Phone,Password} from '@/public/rules'

export default {
 data(){
   return{
     registerData:{
       username:"",
       password:""
     },
     rulesRegister:{
       username:[{validator: Phone, trigger: 'blur' }],
       password:[{validator: Password, trigger: 'blur' }]
     }

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
          .el-form{
            margin-top:20px;
            .el-input{
               margin-top:-10px;
            }
            .captcha{
              float: left;
              width:65%;
            }
            .el-button{
              width:100%;
              background: #dd2a17;
              color:#fff;
              &:hover{
                background: red;
              }
            }
            .captchaGet{
              width:35%;
            }
          }
        }
    }
  }
 
}

</style>