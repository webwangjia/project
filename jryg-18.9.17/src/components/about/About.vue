<template>
  <div class="aboutwarp">
    <div class="aboutBj">
    </div>
    <div class="about">
      <div class="AboutCenter">
        <div class="nav">
          <el-menu
          active-text-color="red"
          background-color="#f7f7f7"
          :router="true"
          >
            <el-menu-item-group>
                <el-menu-item index="/about/aboutTwo">关于我们</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="/about/contactUs">联系我们</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="/about/risktips">风险提示</el-menu-item>
            </el-menu-item-group>
                <el-menu-item-group>
                <el-menu-item index="/about/question">常见问题</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </div>
        <div class="navShow">
          <router-view></router-view>
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
.aboutwarp{
  width:100%;
  background: #efefef;
  .aboutBj{
    width:100%;
    height:110px;
    background: url("../../assets/img/jinriyishangH.png") no-repeat center center;
  }
  .about{
    width:100%;
    background: #f7f7f7;
    min-height:640px;
    padding-top:20px;
    padding-bottom:20px;
    .AboutCenter{
      width:1200px;
      margin:0 auto;
      .nav{
        float: left;
        width:111px;
        .el-menu{
          border-right:none;
        }
        .el-menu-item{
          height:48px;
          line-height:48px;
          font-size:14px;
          color:#333333;
          font-weight:550;
        }
      }
      .navShow{
        float: right;
        width:1089px;
        background: #fff;
        min-height:600px;
        border:1px solid #efefef;
      }
    }
  }
}


</style>