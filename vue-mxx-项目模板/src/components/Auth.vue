<template>
     <div class="authWarp">
       <div class="center">
           <router-view></router-view>          
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
.authWarp{
  width:100%;
  min-width:1200px;
  height:480px;
  background:url('../assets/Lbanner.jpg') center center no-repeat;
  display:flex;
  justify-content:center;
  .center{
    width:1200px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
  }
}
</style>