<template>
  <div class="orderWarp">
      <div class="navList">
            <el-menu
                :default-active="fullPath"
                :router="true"
                background-color="#fff"
                text-color="#666"
                active-text-color="#ea2225">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-goods"></i>
                        <span>我的订单</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/center/order">订单列表</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>个人信息</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/center/person_img">修改头像</el-menu-item>
                        <el-menu-item index="/center/person_password">修改密码</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
           </el-menu>
      
      </div> 
      <div class="navShow">
         <router-view></router-view>
      </div> 
  </div>
</template>

<script>
export default {
    data() {
        return {
           fullPath:'/center/order',
        }
    },
    created(){
        this.fullPath = this.$route.fullPath;
    },
    methods: {
       
    }
}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

.orderWarp{
    width:1200px;
    margin:0 auto;
    display:flex;
    .navList{
        width:160px;

        // element style
        .el-menu{
            width:152px
        }
        .el-menu-item-group>ul{
            width:152px;
        }
        .el-submenu .el-menu-item{
            min-width:150px;
            width:150px;
        }
        .el-submenu__title{
            span{
                margin-right:20px;
            }
        }
        /deep/.el-submenu__title .el-icon-arrow-down{
            margin-top:-5px;
        }
    }
    .navShow{
        width:1040px;
        background:#fff;
    }
}

</style>