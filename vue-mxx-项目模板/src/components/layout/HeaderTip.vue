<template>
  <div class='tip-warp'>
     <div class='tip-center'>
        <p class='tip-phone'>
          联系电话：
          <span>400-991-0388</span>
          （周一至周五9:00--18:00）
        </p>
        <p v-show="!isLogin" class='tip-not-login'>
           <span>您好</span>
           <router-link to='/login'> 请登录,</router-link>
           <router-link to='/register' >免费注册</router-link>
        </p>
        <P v-show="isLogin" class="tip-login">
           <router-link to='/' class="homeA"> 首页</router-link> |
           <span>欢迎 {{username}}</span> |
           <router-link to='/center/order'>个人中心</router-link> |
           <a href="javascript:;" @click="exit">退出</a>
        </P>
     </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'

export default {
  name:'HeadeTip',
  data() {
    return {
    }
  },

  methods:{
    ...mapActions(['exitLogin']),
    exit(){
       this.exitLogin(false).then(()=>{
           this.$router.push('/')
       })
    }
  },
  computed:{
    ...mapState(['isLogin','username']),
  }
}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

  .tip-warp{
    display: flex;
    justify-content: center;
    align-items:center;
    height:36px;
    border-bottom:1px solid #e1e1e1;
    font-size:12px;
    .tip-center{
      display:flex;
      justify-content: space-between;
      width:1200px;
      color:#999999;
      .tip-phone{
        span{
          color:#db200c;
        }
      }
      .tip-not-login{
        a{
          color:@main-color;
          text-decoration:none;
          padding:0 3px;
        }
        .homeA{
          color:@minor-color;
          &:hover{
            color:@hover-color;
          }
          transition:.1s linear color;
        }
      }
      .tip-login{
        a{
          text-decoration:none;
          padding:0 3px;
          transition:all .2s linear;
          &:hover{
            color:@hover-color;
          }
        }
        span{
            color:@main-color;
            padding:0 5px;
        }
      }
    }
  }
</style>
