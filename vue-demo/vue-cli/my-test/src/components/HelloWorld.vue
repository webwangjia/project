<template>
  <div class="hello">
    <p>{{reqData.name}}</p>
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
import axios from 'axios'
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
      }],
      reqData:{}
    }
  },
  created(){
      this.showListReq()

      let ary = [1,2,3,4,5]
      let ary1 = [5,6,7,8,5]
      let obj = {
        name:1,
        age:23
      }
      console.log(ary)
      console.log([...ary,...ary1])
      console.log(...obj)
  },
  methods:{
      changeMsg(val){
         this.msg = val;
      },
      showListReq(){
        axios({
           method:'get',
           url:'/api/showList',
        }).then(res=>{
           console.log(res.data)
           this.reqData = res.data[0]
        }).catch(err=>{

        })
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
