<template>
    <div class="buttonWarp">
        <button :class="[type,size]">
          <span>{{text}}</span>
        </button>
    </div>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    props:['text','type','size'] // text 文字；type 类名
}
</script>


<style lang="less" scoped>
@import url("../../theme/base.less");

.buttonWarp{
    display:inline-block;
    button{
       border:none;
       outline:none;
       cursor:pointer; 
       width:134px;
       height:38px;
       font-size:16px;
       transition:all .2s linear;
       border-radius:4px;
    }
    .confirm{
       color:#fff;
       background:@main-color;
       &:hover{
           background:@hover-color-two;
       }
    }
    .cancel{
       border:1px solid @main-color;
       background:#fff;
       color:@main-color;
       &:hover{
           color:@hover-color;
           border-color:@hover-color-two;
       }
    }
    
     /*大小*/
    .big{

    }
    .small{
        width:80px;
    }
}

</style>