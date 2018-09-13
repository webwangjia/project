<template>
  <div class='header'>
     <div class='header-center'>
        <div class="logo">
            <router-link to='/'>
              <img src="@/assets/logo.png" alt="">
            </router-link>
           <span>{{this.$route.meta.title}}</span>
        </div>
        <div class="btnWarp" v-show="!tipMsg">
           <p v-show="this.$route.name == 'login'">没有账号立即 <router-link to="/register">注册</router-link></p>
           <p v-show="this.$route.name == 'register' || this.$route.name == 'forget'">已有账号立即 <router-link  to="/login">登录</router-link></p>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderLayout',
  props:['tipMsg'],
}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

.header{
  display:flex;
  justify-content:center;
  background:#fff;
  .header-center{
    width:1200px;
    height:80px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .logo{
      width:400px;
      display:flex;
      align-items:center;
      img{
        width:170px;
        height:auto;
      }
      span{
        font-size:24px;
        margin-left:20px;
        padding-bottom:4px;
      }
    }
    .btnWarp{
      width:300px;
      display:flex;
      justify-content:flex-end;
      a{
        color:@main-color;
      }
    }
  }
}
</style>
