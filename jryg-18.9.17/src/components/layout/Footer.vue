<template>
  <div class="footer">
    <div class="fotterCenter">
      <div class="company">
        <ul>
          <li>
            <img src="@/assets/img/jituan.png"/>
          </li>
          <li>
            <img src="@/assets/img/longtengsuiyue.png"/>
          </li>
          <li>
            <img src="@/assets/img/jinriyishang.png"/>
          </li>
        </ul>
      </div>
      <div class="footerBottom">
        <ul>
          <li>
            <router-link to='/about/aboutTwo'>关于我们</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link to='/about/contactUs'>联系我们</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link to='/about/risktips'>风险提示</router-link>
          </li>
          <span>|</span>
          <li>
            <router-link to='/about/question'>常见问题</router-link>
          </li>
        </ul>

      </div>

    </div>
   
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>


<style lang="less" scoped>
.footer{
  width:100%;
  background: #fff;
  padding-top:25px;
  .fotterCenter{
    width:1200px;
    margin:0 auto;
    .company{
      width:100%;
      height: 100px;
      border-bottom:1px solid #eee;
      ul{
        width:100%;
        height:100%;
        display: flex;
        justify-content: space-between;
        li{
          width:375px;
          height:60px;
          border:1px solid #eee;
          padding-top:5px;
          padding-left:95px;
        }
      }
    }
    .footerBottom{
      width:100%;
      height:36px;
      color: #666666;
      ul{
        width:100%;
        height:100%;
        display: flex;
        line-height: 36px;
        padding-left:410px;
        li{
          margin-left: 15px;
          margin-right: 15px;
        }
      }
    }
  }
}

</style>