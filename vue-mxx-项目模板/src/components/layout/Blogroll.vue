<template>
  <div class="blogroll">
    <div class="blogroll-center">
       <ul>
         <li>
           <a><img src="../../assets/img01.jpg"/></a>
         </li>
         <li>
           <a><img src="../../assets/img02.jpg"/></a>
         </li>
         <li>
           <a><img src="../../assets/yuzhou.png"/></a>
         </li>
       </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'Blogroll',
  data(){
    return{

    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

.blogroll{
  .blogroll-center{
    width:1200px;
    padding-top:10px;
    margin:0 auto;
    padding-bottom:15px;
    border-bottom:1px solid @border-color;
    ul{
      display:flex;
      justify-content:space-between;
      li{
        a{
          display:block;
        }
      }
      li:last-child{
        width:376px;
        height:60px;
        border:1px solid #eee;
        display:flex;
        justify-content: center;
        align-items:center;
        img{

          display:block;
          width: 150px;

        }

      }
    }
  }
}
</style>
