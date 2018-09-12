<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Test :data="childrenMsg" 
          :msg="msg" 
          :aryData="ary"
          v-on:changeMsgFun="changeMsg"/>

  </div>
</template>

<script>
import Test from './Test'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome',
      childrenMsg:'我是父组件数据',
      ary:[{
        name:'小明',
        age:23
      },{
        name:'小红',
        age:25
      },{
        name:'小牛',
        age:27
      }]
    }
  },
  methods:{
      changeMsg(val){
         this.msg = val;
      } 
  },
  components:{
    Test
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
