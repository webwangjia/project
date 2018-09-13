<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'



export default {
  name: 'App',
  data() {
    return {

    }
  },
  created(){
     if(sessionStorage.JRYG_TOKEN){
        this.loginCheck(true)
     }else{
        this.loginCheck(false)
     }
  },
  methods:{
    ...mapActions(['loginCheck'])
  },
}
</script>

<style>
body, html {
  min-height: 100%;
  padding:0;
  margin:0;
  background-color: #f7f7f7;
  font-family: "微软雅黑","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
  font-size:14px;
}
*{
  box-sizing: border-box;
  list-style: none;
  font-style:normal;
  margin:0;
  padding:0;
}
a{
  color:#666;
  text-decoration:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
