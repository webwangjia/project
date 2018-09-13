<template>
  <div class="createEvaluateListWarp">
     <div class="title"><strong>评价订单</strong> <span>订单号：<i>{{this.$route.query.orderNo}}</i> {{this.$route.query.createTime}}</span></div>
     <div class="evaluateMsg">
        <div class="evaluateLeft">
            <div class="goodMsg">
                <div class="title"><strong>商品信息</strong></div>
                <P>{{this.$route.query.productName}}</P>
                <P>{{this.$route.query.quantity}}</P>
                <P>{{this.$route.query.specs}}</P>
            </div>
            <div class="grade">
                <div class="title"><strong>商品满意度</strong></div>
                <P>
                    <el-rate
                        v-model="evaluateData.grade"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                    </el-rate>
                </P>
            </div>
            <div class="comment">
                <div class="title"><strong>评价内容</strong></div>
                <div class="commentMsg">
                   <el-input
                        type="textarea"
                        :rows="6"
                        placeholder="请填写您的评论："
                        v-model="evaluateData.info">
                    </el-input>
                </div>
            </div>
        </div>
        <div class="goodsImg">
           <img :src="this.$route.query.productImage" />

        </div>
     </div>

     <div class="btnWarp">
        <el-button @click="submit" type="danger">提交评论</el-button>
     </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
    data() {
        return {
          isLoading: true,
        }
    },

    computed:{
      ...mapState('evaluate/createEvaluate',['evaluateData']),
    },
    created(){

    },
    methods:{
      ...mapActions('evaluate/createEvaluate',['createEvaluateRequest']),
      submit(){
          this.createEvaluateRequest(this.$route.query.orderNo).then(res=>{
                this.$message({
                    type: 'success',
                    message: '评论成功',
                    center:true,
                });
                this.$router.push('/center/order')
          }).catch(error=>{
                let msg = `评论失败,${error.data.message}`
                this.$message({
                    type: 'error',
                    message: msg,
                    center:true,
                });
          })
      }
    }
}
</script>


<style lang="less" scoped>
@import url("../../theme/base.less");


.createEvaluateListWarp{
    width:1200px;
    margin:0 auto;
   .title{
        text-align:left;
        font-size:20px;
        color:#444;
        strong{
            color:#444;
        }
        span{
            font-size:15px;
            margin-left:30px;
            color:#666;
            font-weight:0;
            i{
                color:@main-color;
                margin-right:10px;
            }
        }
    }
    .evaluateMsg{
        width:100%;
        display:flex;
        justify-content:space-between;
        margin-top:15px;
        padding:25px 50px;
        background:#fff;
        text-align:left;
       .evaluateLeft{
           width:750px;
           .title{
               font-size:16px;
               margin:10px 0 20px;
           }
           .goodMsg{
               p{
                   margin:12px 0;
                   &:nth-of-type(2){
                       color:@main-color;
                   }
                   &:nth-of-type(3){
                       color:#999;
                       margin-bottom:20px;
                   }
               }
           }
           .grade{
               p{
                  margin:12px 0;
               }
           }
           .comment{
               .commentMsg{
                   width:520px;
               }
           }
       }
       .goodsImg{
           width:400px;
           img{
               width:400px;
               height:400px;
           }
       }
    }
    .btnWarp{
        padding:50px;
        .el-button--danger{
            padding:14px 74px;
            background-color:@main-color;
            border-color:@main-color;
            font-size:16px;
        }
    }
}
</style>
