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
          >
            <el-menu-item-group>
                <el-menu-item index="1">关于我们</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="2">联系我们</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <el-menu-item index="3">风险提示</el-menu-item>
            </el-menu-item-group>
                <el-menu-item-group>
                <el-menu-item index="4">常见问题</el-menu-item>
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
    padding-top:20px;
    .AboutCenter{
      width:1200px;
      margin:0 auto;
      ul{
         float: left;
         .el-menu-item{
        font-size:15px;
        height:30px;
        line-height:30px;
        width:100px;
      }
      }
      .navShow{
          float: right;
          width:1040px;
          min-height:530px;
          padding:25px;
          background:#fff;
      }
  
    }
 
  }
}


</style>