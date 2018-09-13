<template>
  <div class="hello">
     <div class="carouselWarp">
          <el-carousel :interval="5000" arrow="hover" indicator-position="none">
            <el-carousel-item v-for="(item,index) in banner" :key="index">
              <img src="../assets/banner.jpg"/>
            </el-carousel-item>
          </el-carousel>
     </div>
     <div class="goods">
        <div class="goodsImg">
            <img :src="product.mainImg"/>
        </div>
        <div class="goodsMsg">
           <h2>{{product.name}}</h2>
           <p class="msgP">
              <span>价格</span>:<em>￥{{specs.salePrice}}</em>/箱
           </p>
            <p class="msgP"><span>规格</span>:<em>{{specs.specs}}</em></p>
            <p class="msgP"><span>生产厂商</span>:<em>泸州老窖服务有限责任公司</em></p>
            <p class="msgP"><span>全国总运营商</span>:<em>龙腾岁月(天津)贸易有限公司</em></p>

          <div class="buttonWarp">
             <div  @click="productLook(product.id)">
                <my-button text="立即购买" type="cancel"/>
             </div>
             <div @click="agentLook">
                <my-button text="我要代理" type="confirm"/>
             </div>
          </div>
        </div>
     </div>

    <!--代理弹框-->
    <div class="agentDiv">
       <el-dialog
          title="请填写代理信息"
          :visible.sync="centerDialogVisible"
          :close-on-click-modal = 'false'
          width="40%"
          center>
          <agent v-on:childClose="parentClose"></agent>
        </el-dialog>
    </div>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'
import MyButton from './other/MyButton'
import Agent from './other/Agent'

export default {
  name: 'HelloWorld',
  data () {
    return {
      centerDialogVisible: false,
    }
  },
  created(){
    this.homeRequest()
  },
  methods:{
     ...mapActions('home',['homeRequest']),
     ...mapActions('product/agent',['resetAgent']),
     productLook(id){
       this.$router.push({path:"/productDetiail",query:{productId:id}})
     },
     agentLook(){
       this.centerDialogVisible = true;
       this.resetAgent();
     },
     parentClose(){
        this.centerDialogVisible = false;
     }
  },
  computed:{
    ...mapState('home',['banner','product','specs'])
  },
  components:{
    MyButton,
    Agent,
  }
}
</script>

<style  lang="less">
@import url("../theme/base.less");

.hello{
  width:1200px;
  margin:0 auto;
  .carouselWarp{
    // elemen style
    .el-carousel__arrow:hover{
      background:@hover-color-two;
    }
    .el-carousel__indicators{
      bottom:16px;
      .is-active{
         .el-carousel__button{
           background:@main-color;
         }
      }
      li{
        .el-carousel__button{
          height:6px;
          border-radius:2px;
        }
      }

    }

  }

  .goods{
    width:1200px;
    min-height:300px;
    display:flex;
    justify-content:space-around;
    padding:20px 10px;
    border:1px solid @border-color;
    background:#fff;
    .goodsImg{
      width:600px;
      img{
        width:440px;
        height:420px;
        border:1px solid #eee;

      }
    }
    .goodsMsg{
      width:560px;
      text-align:left;
      padding-top:20px;
      h2{
        font-size:24px;
        margin-bottom:20px;
      }
      .msgP{
        color:#333;
        font-size:16px;
        margin-bottom:28px;
        span{
          display:inline-block;
          width:100px;
          text-align-last:justify;
          color:#999;
        }
        em{
          display:inline-block;
          margin-left:10px;

        }
        &:nth-of-type(1){
          em{
            font-size:24px;
            color:red;
          }
        }
      }

      .buttonWarp{
          display:flex;
          margin-top:25px;
          &:first-child{
            margin-right:35px;
          }
      }

    }
  }

  .agentDiv{

    /deep/.el-dialog__headerbtn{
      top:16px;
      i{
        &:hover{
          color:@main-color;
        }
       }
    }
    /deep/.el-dialog__header{
       padding-top:13px;
       background:#eee;
    }
  }

}
</style>
