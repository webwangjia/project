<template>
    <div>
        <h3>计时器</h3>
        <h4>{{time}}</h4>
        <button @click="clearTimeout">{{text?"开始":"取消"}}定时器</button>
    </div>
</template>


<script>
export default {
    data(){
        return{
            time:0,
            setInt:null,
            text:false,
        }
    },
     created(){
       this.clock()
    },
    methods:{
        clock(){
          this.setInt=setInterval(()=>{
               this.time=this.time+1;
            },1000)
        },
        clearTimeout(){
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

