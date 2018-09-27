<template>
  <div class="photo">
    <div class="photoCenter">  
      <div class="loginBox"> 
          <div class="loginBoxC">
            <h3>账户登录</h3>
            <div class="loginForm">
              <el-form :model="loginData" status-icon :rules="rulesLogin" ref="loginData"  class="demo-ruleForm">
                <el-form-item prop="username">
                  <el-input type="text" v-model="loginData.username" auto-complete="off"  placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" v-model="loginData.password" auto-complete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                 <el-button >登录</el-button>
              </el-form>
             
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
import {Phone,Password} from '@/public/rules'
export default {
 data(){
    return{
          loginData:{
            username:"",
            password:""
          },
          rulesLogin: {
            username: [
              { validator: Phone, trigger: 'blur' }
            ],
            password: [
              { validator: Password, trigger: 'blur' }
            ],
          },
      }
 },
 
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
              margin-top:10px;
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