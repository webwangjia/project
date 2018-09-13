<template>
  <div class="aboutWarp">
      <div class="headerBj">
      </div>
      <div class="about">
        <div class="navList">
            <el-menu
                :default-active="fullPath"
                :router="true"
                background-color="#fff"
                text-color="#666"
                active-text-color="#ea2225">
                    <el-menu-item-group>
                        <el-menu-item index="/about/introduce">企业简介</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <el-menu-item index="/about/contact">联系我们</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <el-menu-item index="/about/help">常见问题</el-menu-item>
                    </el-menu-item-group>
            </el-menu>
        </div>
        <div class="navShow">
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
           fullPath:'/about/introduce',
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

.aboutWarp{
    width:100%;
    .headerBj{
        width:100%;
        height:110px;
        background:url('../../assets/Tbanner.jpg') no-repeat center center;
        margin-bottom:10px;
        margin-top:-13px;
    }

    .about{
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
            /deep/.el-menu-item-group{
                font-weight:bold;
                ul{
                    li{
                        font-size:16px
                    }

                };
            }
        }
        .navShow{
            width:1040px;
            min-height:530px;
            padding:25px;
            background:#fff;
        }
    }
}


</style>
