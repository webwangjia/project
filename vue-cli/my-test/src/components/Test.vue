<template>
    <div class="timeWrap">
        <h1>计时器</h1>、
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
    created(){
       this.clock()
    },
    methods:{
       clock(){
         this.setInt = setInterval(()=>{
              this.time += 1;
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
