<template>
    <div class="headerWrap">
       <div class="headerTop">
            <div class="topCenter">
                <div class="mobileMsg">
                   联系电话： 
                   <span>400-991-0388</span>
                 （周一至周五9:00--18:00）
                </div>
                <div class="loginMsg">
                    您好
                    <router-link to="/login">请登录,</router-link>
                    <router-link to="/register">免费注册</router-link>
                </div>
            </div>
       </div>
       <div class="headerBottom">
           <div class="bottomCenter">
               <div class="logoWrap">
                    <p class="logoLeft">
                        <router-link to="/">
                            <img src="@/assets/img/logo.png" alt="">
                        </router-link>
                    </p>
                    <p class="logoRight">
                       {{$route.name}}
                    </p>
                </div>
                <div></div>
           </div>
       </div>
    </div>
</template>


<script>
export default {
    data(){
        return {

        }
    }
}
</script>


<style lang="less" scoped>
.headerWrap{
    width:100%;
    .headerTop{
      height:36px;
      background: #F7F7F7;
      border-bottom:1px solid #e1e1e1;
     .topCenter{
        width:1200px;
        height:100%;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        .mobileMsg{
            width:420px;
            height:100%;
            line-height: 36px;
            font-size: 12px;
            color:#666;
            span{
                vertical-align: bottom;
                color:#db200c;
            }
        }
        .loginMsg{
            .mobileMsg;
            text-align: right;
            font-size: 12px;
            a{
                font-size: 12px;
                color:#db200c;
            }
        }
     }

    }
    .headerBottom{
        width:100%;
        height:80px;
        .bottomCenter{
            width:1200px;
            height: 100%;
            margin:0 auto;
            .logoWrap{
                width:400px;
                height:100%;
                display: flex;
                align-items: center;
                .logoLeft{
                    width:200px;
                    height:100%;
                    display: flex;
                    align-items: center;
                    a{
                        display: block;
                    }
                   img{
                       width:170px;
                   }
                }
                .logoRight{
                    font-size: 24px;
                }
            }
        }
    }

}
</style>
