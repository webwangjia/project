<template>
   <div class="loayoutWarp">
        <div>
            <header-tip v-show="isHeaderBlogroll"></header-tip>
            <header-layout :tipMsg="isHeaderBlogroll"></header-layout>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
        <div :class="isHeaderBlogroll?'footer':''">
            <blogroll  v-show="isHeaderBlogroll"></blogroll>
            <footer-layout></footer-layout>
        </div>

        <div class="floatWarp" :style="position">
          <div @click="floatShow" class="btn">
             {{floatMsg}}
          </div>
          <float-frame></float-frame>
        </div>
   </div>
</template>

<script>
import {mapState} from 'vuex'

import { HeaderLayout,HeaderTip,Blogroll, FooterLayout, FloatFrame} from './layout'

export default {
 name: 'Main',
 data(){
   return{
      position:{
          right:'20px'
      },
      floatMsg:'隐藏'
   }
 },
 created(){
   let name = this.$route.meta.title;
   if(name !== "登录"){
       this.isHeader = true;
   }else{
       this.isHeader = false;
   }
 },
 computed:{
   ...mapState(['isHeaderBlogroll']),
 },
 methods:{
   floatShow(){
      if(parseInt(this.position.right) == 20){
         this.position.right = '-172px';
         this.floatMsg = '显示';
      }else{
           this.position.right = '20px';
           this.floatMsg = '隐藏';
      }
   }
 },
 components:{
     HeaderTip,
     HeaderLayout,
     Blogroll,
     FooterLayout,
     FloatFrame
 }
}
</script>

<style lang="less" scoped>
@import url("../theme/base.less");

.loayoutWarp{
    min-height:100%;
    .floatWarp{
        position:fixed;
        top:26%;
        z-index:999999;
        transition:all .3s linear;
        .btn{
            width:25px;
            height:80px;
            padding:18px 0;
            position:absolute;
            left:-25px;
            top:170px;
            border:1px solid #ccc;
            border-right:none;
            border-radius:4px 0 0  4px;
            cursor:pointer;
            background:@main-color;
            color:#fff;
            border-color:@main-color;
            &:hover{
                background:@hover-color-two;
                border-color:@hover-color-two;
            }
        }
    }
    .content{
        min-height:500px;
        padding:15px 0 40px;
    }
    .footer{
        background:#fff;
    }

}

</style>
