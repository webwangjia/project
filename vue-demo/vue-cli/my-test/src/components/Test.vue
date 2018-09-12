<template>
    <div class="timeWrap">
        <h1>计时器</h1>
        <p>{{data}}</p>
        <div>
            <p v-for="(item,index) in aryData" :key="index">
               <span>{{item.name}}</span>
               <span>{{item.age}}</span>
            </p>
        </div>
        <h5>{{time}}</h5>
        <div>
            <button @click="clearTime">{{text?'开始':'取消'}}定时器</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           time:0,
           setInt:null,
           text:false
        }
    },
    // props:['data','msg','aryData'],
    props:{
      data:String,
      msg:[String,Number],
      aryData:Array,
    },
    created(){
       this.clock()
    },
    methods:{
       clock(){
         this.setInt = setInterval(()=>{
              this.time += 1;
              this.$emit('changeMsgFun',this.time)
           },1000)
       },
       clearTime(){
           if(this.text){
               this.clock()
           }else{
             clearInterval(this.setInt)
           }

           this.text = !this.text;
       }
    }
}
</script>

<style scoped>
.timeWrap{
    width:300px;
    height:400px;
    margin: 0 auto;
}
</style>
