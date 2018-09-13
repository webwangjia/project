<template>
   <div class="detailWarp">
      <div class="detailTop">
         <div class="productImg">
            <div class="imgWarp">
               <img :src="subImg[mainImgIndex]"/>
            </div>
            <div class="imgBtn">
               <p @click="prevImg" :class="prevNoCursor?'noCursor':''">
                 <i class="el-icon-arrow-left"></i>
               </p>
               <div class="allImg">
                 <ul :style="UlstyleObj">
                    <li v-for="(item,index) in subImg" :key="index" @click="changeImg(index)" :class="activeIndex == index?'active':''">
                       <img :src="item"/>
                    </li>
                 </ul>
               </div>
               <p @click="nextImg" :class="NextNoCursor?'noCursor':''">
                 <i class="el-icon-arrow-right"></i>
               </p>
            </div>
         </div>
         <div class="productMsg">
           <h2 class="title">{{products.product.name}}</h2>
           <div class="listMsg">
               <span  class="sumSpan">现价：</span>
               <P class="money"><em>￥{{products.specs[specsIndex].salePrice}}</em>/箱 <i>原价  <del>￥{{ products.specs[specsIndex].price}}</del> </i></P>
            </div>
           <div class="listMsg">
               <span>规格：</span>
               <ul class="listUl">
                  <li v-for="(item,index) in products.specs" :key="index" @click="activeProduct(index,item.id)" :class="{active:index == specsIndex?true:false}">
                    {{item.specs}}
                  </li>
               </ul>
           </div>
           <div class="listMsg">
             <span class="sumSpan">数量：</span>
             <div class="numberWarp">
               <el-input-number v-model="productSum" controls-position="right" :min="1" ></el-input-number>
             </div>
           </div>
           <!--按钮-->
           <div class="buttonWarp">
             <div  @click="linkBuy">
                <my-button text="立即购买" type="cancel"/>
             </div>
             <div @click="agentLook">
                <my-button text="我要代理" type="confirm"/>
             </div>
          </div>
         </div>
      </div>
       <!--商品详情-->
      <div class="productDetailWarp">
          <div class="detailTitle">
              <ul>
                 <li :class="isActive?'active':''" @click="productClick(true)">商品介绍</li>
                 <li :class="isActive?'':'active'" @click="productClick(false)">商品评论({{evaluateData.allCount>9999?"1万+":evaluateData.allCount}})</li>
              </ul>
          </div>
          <div class="productContent">
              <div  v-show="isActive" v-html="products.product.detail" class="productMsgWarp">

              </div>
              <div  v-show="!isActive">
                 <evaluate-list :productId='this.$route.query.productId'></evaluate-list>
              </div>
          </div>

      </div>

      <!--代理-->
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
import {mapState,mapActions} from 'vuex'
import MyButton from '../other/MyButton'
import Agent from '../other/Agent'
import {EvaluateList} from '../evaluate'

export default {
  data(){
      return {
        productSum:1, // 购买商品数量
        specsIndex:0,
        specsId:'', // 规格id
        mainImgIndex:0, // 主图index
        subImg:[], // 商品副图
        sumImg:1, // 附图移动次数
        activeIndex: 0, // 当前展示的图片
        prevNoCursor:true,
        NextNoCursor: false,
        UlstyleObj:{ // 样式对像
           width:'500px',
           left:'0',
        },
        // 商品详情
        isActive:true,
        // 代理
        centerDialogVisible: false,
      }
  },
  created(){
    let id = this.$route.query.productId;
    this.productsRequest(id).then(res =>{  // 商品信息请求
        if(res.status){
            this.subImg = JSON.parse(res.data.product.subImg)
             if(this.subImg.length <= 5){
                this.NextNoCursor = true;
             }

           this.specsId = this.products.specs[0].id; // 存储初始第一个规格id
        }
    })




  },
  computed:{
    ...mapState('product/product',['products','productSpecs']),
    ...mapState('product/agent',['agent']),
    ...mapState('evaluate/evaluateList',['evaluateData']),
  },
  methods:{
    ...mapActions('product/product',['productsRequest','productSpecsRequest']),
    ...mapActions('product/agent',['resetAgent','agentRequest']),
    activeProduct(index,id){  // 选择规格
       this.specsIndex = index;
       this.specsId = id;
    },
    prevImg(){  // 图片控制
      let length = this.subImg.length;

      if(this.sumImg <= 1){ // 判断开始是否可以右滑动
          return false;
      }

       // 50*5 是图片总宽度， 50 是图片总间距
      this.UlstyleObj.left = parseInt(this.UlstyleObj.left) + (50*5 + 50) + 'px';
      this.sumImg = this.sumImg - 1;
      this.NextNoCursor = false;
      if(this.sumImg <=1){
          this.prevNoCursor = true;
      }
    },
    nextImg(){ // 下五个图片
      let length = this.subImg.length;

      if(length<=5){ // 判断长度是否大于5
          return false;
      }

      if(this.sumImg*5 >= length){ // 判断是否还可以向左滑动
           return false;
      }
       // 50*5 是图片总宽度， 50 是图片总间距
      this.UlstyleObj.left = parseInt(this.UlstyleObj.left) - (50*5 + 50) + 'px';
      this.sumImg = this.sumImg + 1;
      this.prevNoCursor = false;
      if(this.sumImg*5 >= length){
         this.NextNoCursor = true;
      }
    },
    changeImg(index){
       this.mainImgIndex = index;
       this.activeIndex = index;
    },
    linkBuy(){ // 购买跳转
       let obj = {
           count: this.productSum,
           specsId: this.specsId,
           productId: this.$route.query.productId,
       }
       this.$router.push({path:'/buy',query:obj})
    },
    agentLook(){ // 我要代理
       this.centerDialogVisible = true;
       this.resetAgent();
    },
    parentClose(){
       this.centerDialogVisible = false;
    },
    productClick(bol){
      this.isActive = bol;
    }
  },
  components:{
    MyButton,
    Agent,
    EvaluateList,
  }
}

</script>


<style lang="less" scoped>
@import url("../../theme/base.less");

.detailWarp{
    width:1200px;
    margin:0 auto;
    .detailTop{
        width:1200px;
        background:#fff;
        padding:20px;
        display:flex;
        justify-content:space-between;
        .productImg{
           width:350px;
           .imgWarp{
               width:350px;
               height:350px;
               border:1px solid #eee;
               img{
                   width:100%;
                   height:100%;
               }
           }
           .imgBtn{
               width:350px;
               height:60px;
               margin-top:10px;
               display:flex;
               justify-content:space-between;
               align-items:center;

               .allImg{
                   width:290px;
                   overflow:hidden;
                   ul{
                       height:50px;
                       position:relative;
                       transition:all .4s linear;
                       li{
                           width:50px;
                           height:50px;
                           float:left;
                           margin-right:10px;
                           border:1px solid #eee;
                           padding:2px;
                           cursor:pointer;
                           transition:all .2s linear;
                           img{
                               width:100%;
                               height:100%;
                           }
                           &:hover{
                             border-color:@main-color;
                           }
                       }
                       .active{
                           border-color:@main-color;
                       }
                   }
               }
               p{
                   width:20px;
                   height:60px;
                   cursor:pointer;
                   display:flex;
                   align-items:center;
                   transition:all .2s linear;
                   color:@minor-color;
                   &:hover{
                       color:@hover-color;
                   }
                   i{
                       font-size:30px;
                   }
               }
               .noCursor{
                   cursor:not-allowed;
               }
           }
        }
        .productMsg{
            width:730px;
            text-align:left;
            .title{
                font-size:24px;
                margin:5px 0 10px;
            }
            .listMsg{
                display:flex;
                font-size:16px;
                color:#333;
                margin-bottom:22px;
                span{
                  display:inline-block;
                  color:@minor-color;
                  margin-right:10px;
                }
                .money{
                    em{
                        font-size:26px;
                        color:@main-color;
                    }
                    i{
                        color:@minor-color;
                        margin-left:16px;
                    }
                }
                .sumSpan{
                  display:flex;
                  align-items:center;
                }
                p,ul{
                   margin:0;
                   padding:0;
                }
                .numberWarp{
                   .el-input-number{
                       width:130px;
                   }
                }
                .listUl{
                    width:600px;
                    li{
                        display:inline-block;
                        padding:8px;
                        border:1px solid @minor-color;
                        border-radius:2px;
                        margin:0 15px 15px 0;
                        cursor:pointer;
                        transition:all .2s linear;
                        &:hover{
                           border-color:@hover-color;
                           color:@hover-color;
                        }
                    }
                    .active{
                        border-color:@main-color;
                        color:@main-color;

                    }
                }
            }
            .buttonWarp{
                display:flex;
                margin-top:25px;
                &:first-child{
                    margin:15px 15px 0 58px;
                }
            }

        }
    }
    .productDetailWarp{ // 商品详情
       width:100%;
       .detailTitle{
           width:100%;
           height:40px;
           background:#f0f0f0;
           ul{
               height:40px;
               display:flex;
               li{
                   width:120px;
                   height:100%;
                   display:flex;
                   justify-content:center;
                   align-items:center;
                   background:#e8e4e4;
                   cursor:pointer;
                   transition:all .2s linear;
                   &:hover{
                       background:@hover-color-two;
                       color:#fff;
                   }
               }
               .active{
                   background:@main-color;
                   color:#fff;
               }
           }
       }
       .productContent{
           background:#fff;
           padding:30px 45px;
           .productMsgWarp{
               text-align:left;
               /deep/img{
                   margin:0;
                   padding:0;
                   vertical-align:bottom;
               }
           }
       }
    }
    .agentDiv{ // 代理样式

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
