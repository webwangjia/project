<template>
    <div>
         <h1>我是第一个页面</h1>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                
            }
        },
        props:['id','msg'],
        created(){
        //   console.log(this.id)
        //   console.log(this.msg)
        }
    }
</script>