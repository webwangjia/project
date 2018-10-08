<template>
  <div class="photo">
    <div class="photoCenter">  
      <div class="loginBox"> 
          <div class="loginBoxC">
            <h3>账户登录</h3>
            <div class="loginForm">
              <el-form :model="loginData" status-icon :rules="rulesLogin" ref="loginRef"  class="demo-ruleForm">
                <el-form-item prop="username">
                  <el-input type="text" v-model="loginData.username" auto-complete="off"  placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" v-model="loginData.password" auto-complete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                 <el-button @click="loginReq">登录</el-button>
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
import axios from 'axios'
import {Phone,Password} from '@/public/rules'
export default {
 data(){
    return{
          loginData:{
            username:"",
            password:"",
       
          },
          rulesLogin: {
            username: [
              { validator: Phone,trigger: 'blur' }
            ],
            password: [
              { validator: Password, trigger: 'blur' }
            ],
          },
      }
 },
 created() {
   
 },
 methods:{
   loginReq(){ 
      this.$refs.loginRef.validate((valid) => {
        if(valid){
              let loginFormData = new FormData();
              loginFormData.append("username",this.loginData.username)
              loginFormData.append("password",this.loginData.password)
              axios({
                method:"post",
                url:"/api/login",
                 data:loginFormData,
                // data:this.loginData,
                // params:this.loginData,
                headers:{
                  // "Content-type":'application/x-ppt',
                  // "x-auth-token":sessionStorage.TOKEN
                 Authorization: 'Basic anJlZ291LXBjOmpyZWdvdS1wYy1zZWNyZXQ='
                }
              }).then(res=>{
                // 假数据token
                //  let resData = {token:'234ndsf23sd23ndc2u3n23hn'}
                 console.log(res)
                 sessionStorage.TOKEN = res.token
                 this.$router.push('/')
              }).catch(err=>{
   
              })
        }
      });  
   },
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