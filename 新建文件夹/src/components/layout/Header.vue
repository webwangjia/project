<template>
  <div class="header">
    <div class="headerTop">
      <div class="topCenter">
        <div class="phonetip">
          联系电话：<span>400-4000-2054</span> (周一至周日8:00-21:00)
        </div>
        <div class="logintip">
          您好 
          <router-link to="/login" >请登录，</router-link>
          <router-link to="/register" >免费注册</router-link>
        </div>
      </div>
    </div>
    <div class="logoWrap">
      <div class="wrapCeenter">
        <div class="logo">
            <router-link to="/"> 
                <img src="@/assets/img/logo.png">
            </router-link>
        </div>
        <div class="shouye">
          <router-link to="/" class="sy" >首页</router-link>
          <router-link to="/register" >商品</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header',
  data(){
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.header{
  width:100%;
  .headerTop{
    width:100%;
    height:36px;
    background: #f5f5f5;
    font-size:12px;
    line-height: 36px;
    .topCenter{
      width:1200px;
      height:100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .phonetip{
        width:300px;
        span{
          color:#db200c;
        }
      }
      .logintip{
          width:400px;
          text-align: right;
          a{
            display: inline-block;
              font-size: 12px;
              color:#db200c;
          }
        }
    }
  }
  .logoWrap{
    width:100%;
    height:80px;
    .wrapCeenter{
      width:1200px;
      height: 100%;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      line-height:80px;
      .logo{
        width:180px;
        margin-top:16px;
        img{
          width:100%;
        }
      }
      .shouye{
        .sy{
          display: inline-block;
          margin-right:15px;
          color: #db200c;
        }
      }
    }
  }
}
</style>