<template>
  <div class="float">
    <div class="r-tit"></div>
    <div class="r-box">
        <div  class="r-two">
           <p><img src="../../assets/logo.png" width="100" height="auto"/></p>
           <p><img width="100" src="../../assets/img05.jpg"/></p>
           <p>公众号</p>
        </div>
        <div class="phone">
           <p class="colred">联系电话</p>
           <p>400-991-0388</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'FloatFrame',
  data(){
    return{

    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

.float{
   .r-tit{
      width:173px;
      height:91px;
      // background:url('../../assets/logoShow.png') no-repeat center center;
   }
   .r-box{
       border:1px solid #e2e2e2;
       text-align:center;
       background:#fff;
       border-radius: 10px;
       padding:20px 10px;
       .r-two{
         p{
             &:nth-of-type(3){
                 padding-bottom:6px;
                 border-bottom:1px dotted #eee;
             }
         }
       }
       .phone{
           margin-top:12px;
           .colred{
              margin-bottom:8px;
              color:@main-color;
           }
       }
   }
}


</style>
