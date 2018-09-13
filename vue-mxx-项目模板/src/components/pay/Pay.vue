<template>
  <div class="payWard">
     <h3 class="title">欢迎您使用以下方式支付</h3>
     <div class="content">
        <div v-show="payShow">
            <p class="mainTit">您的订单已经提交成功，请尽快完成支付</p>
            <p class="subTit">立即支付 <span>{{payMentShow}}</span> 元即可完成订单，请你在30分钟内完成支付，否则订单会被取消。</p>
            <div class="maWarp">
              <div class="radio">
                 <el-radio-group  @change="changeImg" v-model="payPlaform" >
                  <el-radio label="1">
                      <span class="weChat">微信支付</span>
                  </el-radio>
                  <el-radio label="2">
                      <span class="alipay">支付宝支付</span>
                  </el-radio>
                 </el-radio-group>
              </div>
              <div class="imgWarp">
                  <p v-show="showImg">
                     <img  :src="payImg" width="250">
                     <span>{{payPlaform == 1?"微信二维码":"支付宝二维码"}}</span>
                  </p>
                  <img v-show="!showImg" src="../../assets/paytit.jpg">
              </div>
            </div>
        </div>

        <div class="buy" v-show="buyOk">
          <p class="buyOk"></p>
          <p class="coltreen">订单支付成功！</p>
          <p class="buyTit">我们尽快为您处理订单发货～</p>
          <p class="buyMenu"><router-link to="/center/order">查看订单状态 </router-link> | <router-link to="/"> 继续看看</router-link></p>
        </div>
        <div class="buy" v-show="buyWrong">
          <p class="buyWrong"></p>
          <p class="font-s22">抱歉！您无法完成本次交易</p>
          <p class="errpr">原因：{{payMsg}}</p>
          <p class="buyMenu"><router-link  to="/">返回商城</router-link></p>
        </div>
     </div>


  </div>
</template>


<script>
import {mapState,mapActions} from 'vuex'

export default {
    data() {
       return {
          showImg:false,
          payImg:'',
          payPlaform:'0', // 支付方式 1 微信， 2支付宝
          isStatus:true, // 是否可以查询订单状态
          payShow:true,
          buyOk:false,
          buyWrong:false,
          payMsg:'未知', // 支付失败时的信息
          payMentShow:0,
          requireTime:'',
       }
    },
    computed:{
    },
    created(){
        this.payMentShow = this.$route.query.payment;
    },
    destroyed(){

      if(this.requireTime){
          clearInterval(this.requireTime)
      }
      console.log(111)
    },
    methods:{
      ...mapActions('pay/payMoney',['createPayRequest','inquireOrderState']),
      changeImg(payType){
          this.showImg = true;
          let obj = {
            orderId: this.$route.query.orderId,
            payPlatform:payType,
          }
          // console.log(obj)
          this.createPayRequest(obj).then(res=>{
              this.payMentShow = res.data.payment;
              let imgUrl = `/api/pay/toQrPay.jpg?access_token=${sessionStorage.JRYG_TOKEN}&payinfoId=${res.data.payinfoId}&payPlatform=${obj.payPlatform}&time=${new Date().getTime()}`
              this.payImg = imgUrl;
          }).catch(error=>{
              this.$message({
                  type: 'error',
                  message: '哎呀，获取支付码出错了！',
                  center:true,
              });
          })


          // 查询订单状态
            //  10待付款  20已付款 40待收货 50待评价60交易关闭
          if(this.isStatus){
                this.requireTime =  setInterval(()=>{
                  this.inquireOrderState(obj.orderId).then(res=>{
                      if(res.data.status == 20){
                        this.payShow = false;
                        this.buyOk = true;
                        this.buyWrong = false;
                        clearInterval(this.requireTime)
                      }

                  }).catch(error=>{
                      this.payMsg = error.response.message;
                      this.payShow = false;
                      this.buyOk = false;
                      this.buyWrong = true;
                      clearInterval(this.requireTime)
                  })
                },1200)
            this.isStatus = false;
          }


      }

    }
}

</script>


<style lang="less" scoped>
@import url("../../theme/base.less");

.payWard{
  width:1200px;
  min-height:600px;
  margin:0 auto;
  color:#333;
  .title{
     padding-bottom:10px;
     text-align:left;
  }
  .content{
    background:#fff;
    padding:40px 0;
    .mainTit{
      font-size:18px;
    }
    .subTit{
      margin:10px 0;
      color:#666;
      span{
        color:@main-color;
      }
    }
    .maWarp{
      .radio{
        margin:25px 0;
        /deep/.el-radio__label{
          font-size:18px;
        }
        /deep/.el-radio__input.is-checked+.el-radio__label{
          color:@main-color;
        }
        /deep/.el-radio__input.is-checked .el-radio__inner{
           border-color:@main-color;
           background:@main-color;
        }
        .weChat{
          padding-left:20px;
          background:url('../../assets/pay.png') no-repeat 0px 1px;
        }
        .alipay{
          padding-left:20px;
          background:url('../../assets/pay.png') no-repeat 0px -35px;
        }
      }
      .imgWarp{
        p{
          display:flex;
          flex-direction:column;
          img{
            display:inline-block;
            margin:0 auto;
          }
        }
      }
    }

    .buy{
       display:flex;
       flex-direction:column;
       .buyOk{
          display:inline-block;
          height:50px;
          background:url('../../assets/icon.png') no-repeat 558px -216px;
       }
       .coltreen{
          height:30px;
          margin:5px 0;
          font-size:22px;
          color:#3cb034;
       }
       .buyTit{
         padding:5px 0;
       }
       .buyMenu{
         color:#78a4ff;
         a{
           color:#78a4ff;
         }
       }
       .buyWrong{
          height:50px;
          background:url('../../assets/icon.png') no-repeat 574px -288px;
       }
       .font-s22{
          height:30px;
          margin:5px 0;
          font-size:22px;
          color:@main-color;
       }
       .errpr{
          padding:5px 0;
       }
       .buyMenu{
         color:#78a4ff;
         a{
           color:#78a4ff;
         }
       }
    }
  }
}
</style>
