<template>
  <div class="about">
    <div class="photo">
      <div class="photoC">
      </div>
    </div>
    <div class="xinxi">
      <div class="xinxiC">
        <div class="Sidebar">
          <ul>
            <li>
              <router-link to="/about" >企业简介</router-link>
            </li>
            <li>
              <router-link to="/contactUs">联系我们</router-link>
            </li>
            <li>
              <router-link to="/risktips" >风险提示</router-link>
            </li>
            <li>
              <router-link to="/question">常见问题</router-link>
            </li> 
          </ul>
        </div>
        <div class="content">

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
.about{
  width:100%;
   background: #efefef;
  .photo{
    width:100%;
    height: 65px;
    margin:0 auto;
    background: url("../../assets/img/4444.png") no-repeat center center;
    background-size:100% auto;
  }
  .xinxi{
    width:100%;
    height: 640px;
    background: #f7f7f7;
    .xinxiC{
      width:1200px;
      height: 640px;
      margin:0 auto;
      .Sidebar{
        float: left;
        width:100px;
        ul{
          width:100%;
          padding-top:20px;
          li{
            width:100%;
            height:50px;
            line-height:50px;
            font-size: 15px;
            a{
               color:#333333;
            }
          }
          li:nth-of-type(4) a{
            color:red;
          }
        }
      }
      .content{
        float: right;
        width:1090px;
        height:590px;
        background: #fff;
        margin-top:25px;
        background: url("../../assets/img/444.png") no-repeat center center;
      }
    }
  }
}

</style>