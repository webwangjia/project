<template>
   <div class="loginWarp">
       <div class="center">
         <!--登录页面-->
           <div v-show="this.$route.name == 'login'" class="login">
              <h2>账户登录</h2>
              <div class="loginForm">
                  <el-form :model="loginData" status-icon :rules="rulesLogin" ref="loginData"  class="demo-ruleForm">
                    <el-form-item prop="username">
                      <el-input type="text" v-model="loginData.username" auto-complete="off"  placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item  prop="password">
                      <el-input type="password" v-model="loginData.password" auto-complete="off"  placeholder="请输入密码"  @keyup.enter.native="loginClick"></el-input>
                    </el-form-item>
                    <el-button :loading="isLoading"  @click="loginClick" size="medium">登录</el-button>
                  </el-form>
              </div>
              <div class="loginBottom">
                 <router-link to="/forget">忘记密码</router-link>
                 <router-link to="/register">免费注册</router-link>
              </div>
           </div>
       </div>
   </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {Phone,Password} from '@/public/rules'

export default {
      data(){
        return{
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
      created(){
         let msg =  this.$route.query.msg || '';
         if(this.$route.query.msg){
            this.$message({
              message: msg,
              type:'warning',
              center:true,
            })
         }
         this.resetLoginData(); // 重置数据
      },
      computed:{
        ...mapState('login/login',['loginData','isLoading'])

      },
      methods:{
        ...mapActions('login/login',['loginRequest','resetLoginData']),
        ...mapActions(['loginCheck']),
        loginClick(){ // 登录
           this.$refs['loginData'].validate((valid) => { // 登录表单验证
              if (valid) {
                 this.loginRequest().then((res)=>{
                    if(res.status == 200){
                        this.loginCheck(true);
                        if(this.$route.query.redirect){
                           this.$router.push(this.$route.query.redirect)
                        }else{
                           this.$router.push('/')
                        }
                    }
                 }).catch(error=>{
                    this.$message({
                      message: '账号或密码错误',
                      type: 'error',
                      center: true,
                    });
                 })
              } else {
                return false;
              }
           });

        }
      },
  }
</script>


<style lang="less" scoped>
@import url("../theme/base.less");

.loginWarp{
  width:100%;
  min-width:1200px;
  height:480px;
  background:url('../assets/Lbanner.jpg') center center no-repeat;
  display:flex;
  justify-content:center;
  .center{
    width:1200px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    .login{
       width:345px;
       height:340px;
       padding:30px;
       border-radius:5px;
       background:#fff;
       h2{
         color:@main-color;
         text-align:left;
         margin-bottom:25px;
       }
       .loginForm{
         width:290px;
         margin:0 auto;

          // element style
         .el-button--medium{
           width:100%;
           background:@main-color;
           color:#fff;
           border-color:@main-color;
           transition:all .2s linear;
           &:hover{
             background:@hover-color-two;
             border-color:@hover-color-two;
           }
         }
       }
       .loginBottom{
          padding-top:10px;
          text-align:right;
          a{
            padding-left:10px;
            transition:all .2s linear;
            &:nth-of-type(2){
              color:@main-color;
            }
            &:hover{
              color:@hover-color;
            }
          }
       }
    }

  }
}
</style>
