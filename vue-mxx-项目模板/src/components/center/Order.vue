<template>
  <div class="orderWarp">
     <div class="orderListHead">
        <el-tabs @tab-click="orderClick">
            <el-tab-pane label="所有订单" name=""></el-tab-pane>
            <el-tab-pane label="待发货" name="20"></el-tab-pane>
            <el-tab-pane label="待收货" name="40"></el-tab-pane>
            <el-tab-pane label="待评价" name="50"></el-tab-pane>
        </el-tabs>
     </div>

     <div class="orderList">
         <div class="listTitle">
            <ul>
              <li :style="widthOne">订单详情</li>
              <li :style="widthTwo">收货人</li>
              <li :style="widthThree">金额</li>
              <li :style="widthFour">状态</li>
              <li :style="widthFive">操作</li>
            </ul>
         </div>

         <div class="listWarp" ref="orderListDom">
             <div v-for="(item, index) in orderListRes.list" class="list" :key="index">
                <div class="orderTitle"><span>{{item.createTime }} 订单号：</span>{{item.orderNo}} </div>
                <ul class="orderMsg">
                    <li :style="widthOne" class="goodsMsg">
                       <div class="goodsImg">
                          <img v-if="item.productImage !== ''" :src="item.productImage"/>
                       </div>
                       <div class="goodsTitle">
                          <p>{{item.productName}}</p>
                          <span>{{item.specs}}</span>
                       </div>
                       <div class="goodsSum">
                          {{item.quantity}}
                       </div>
                    </li>
                    <li :style="widthTwo">{{item.receiverName}}</li>
                    <li :style="widthThree" class="money">
                        <p>总金额：￥{{item.payment}}</p>
                        <span>在线支付</span>
                    </li>
                    <li :style="widthFour">
                       {{item.status}}
                    </li>
                    <li :style="widthFive" class="lastLi">
                        <!-- 10待付款 20已付款 30已取消 40待收货 50待评价 51已评价 60交易关闭-->
                        <el-button @click="lookLogistics(item.logisticsName,item.logisticsNo)" v-show="item.intStatus == 40" type="info" size="mini">查看物流</el-button>
                        <el-button @click="affirmGoods(item.id)" v-show="item.intStatus == 40" type="danger" size="mini">确认收货</el-button>
                        <el-button @click="cancelOrder(item.orderNo)" v-show="item.intStatus == 20" type="danger" size="mini">取消订单</el-button>
                        <el-button @click="evaluate(index)" v-show="item.intStatus == 50" type="danger" size="mini">立即评价</el-button>
                        <el-button
                          v-show="item.intStatus == 51 || item.intStatus ==30 || item.intStatus ==60 || item.intStatus == 50 " type="danger" size="mini"
                          @click="buyAgain(item.productId)">
                          再次购买
                        </el-button>
                    </li>
                </ul>
            </div>

            <div class="noneList" v-show="orderListRes.list.length == 0">
             暂无记录
           </div>

         </div>


         <div class="page" v-show="orderListRes.list.length !== 0">
               <el-pagination
                    @current-change="changeOrder"
                    :current-page.sync="orderReqData.pageNum"
                    :page-size="orderReqData.pageSize"
                    layout="total, prev, pager, next, jumper"
                    :total="Number(orderListRes.total)"
                    :background="true">
                </el-pagination>
         </div>
     </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
    data() {
        return {
           widthOne:{width:'420px'},
           widthTwo:{width:'130px'},
           widthThree:{width:'150px'},
           widthFour:{width:'140px'},
           widthFive:{width:'150px'},
           orderReqData:{
                access_token: sessionStorage.JRYG_TOKEN,
                status:null,
                pageSize:10,
                pageNum:1,
            },
            isLoading:'',
        }
    },
    computed:{
       ...mapState('center/order',['orderListRes']),
    },
    created(){
        this.orderListRequest(this.orderReqData)
    },
    methods:{ // 10待付款 20已付款 40待收货 50待评价 51已评价 60交易关闭
        ...mapActions('center/order',['orderListRequest','refundPayRequest','confirmationRequest']),
        loadingShow(){ // loading 显示
            this.isLoading = this.$loading.service({
                target:this.$refs.orderListDom,
                text:'拼命加载中...',
            });
        },
        orderClick(vDom){ // 导航

           let index = vDom.name;
           if (this.orderReqData.status == index) return;
           this.loadingShow()
           this.orderReqData.status = index;
           this.activeList = index;
           this.orderListRequest(this.orderReqData).then(res=>{
                 this.$nextTick(() => { // 关闭loading
                    this.isLoading.close();
                 });
           })

        },
        changeOrder(){  // 分页
           this.loadingShow()
           this.orderListRequest(this.orderReqData).then(res=>{
                 this.$nextTick(() => { // 关闭loading
                    this.isLoading.close();
                 });
           })
        },
        buyAgain(productId){ // 再次购买
           this.$router.push({path:"/productDetiail",query:{productId}})
        },
        cancelOrder(orderNo){  // 取消订单

            this.$confirm('您确定取消该订单?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(()=>{
                this.refundPayRequest(orderNo).then(res=>{
                  console.log(res)
                      if(res.status == 200){
                           this.$message({
                                type: 'success',
                                message: '取消订单成功！',
                                center:true,
                            });

                            this.loadingShow()
                            this.orderListRequest(this.orderReqData).then((res)=>{
                                 this.$nextTick(() => { // 关闭loading
                                    this.isLoading.close();
                                 });
                            })
                      }

                }).catch(error=>{
                        this.$message({
                            type: 'error',
                            message: '取消订单失败！',
                            center:true,
                        });

                })
            }).catch(()=>{})

        },
        affirmGoods(orderId){  // 确认收货

            this.$confirm('您确定收货?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(()=>{
                    this.confirmationRequest(orderId).then(res=>{

                           if(res.data == "成功"){
                                this.$message({
                                    type: 'success',
                                    message: '确认收货成功',
                                    center:true,
                                });

                                this.loadingShow()
                                this.orderListRequest(this.orderReqData).then((res)=>{
                                    this.$nextTick(() => { // 关闭loading
                                        this.isLoading.close();
                                    });
                                })
                           }else{
                                 this.$message({
                                    type: 'error',
                                    message: '确认收货失败',
                                    center:true,
                                });
                           }

                    }).catch(()=>{
                         this.$message({
                                type: 'error',
                                message: '确认收货失败',
                                center:true,
                          });
                    })
            }).catch(()=>{})

        },
        lookLogistics(logisticsName,logisticsNo){ // 查看物流
             let str =  `<div>
                           <p><strong>物流公司：</strong>${logisticsName}</p>
                           <p><strong>物流单号：</strong>${logisticsNo}</p>
                        </div>`
             this.$alert(str, '物流信息', {
                dangerouslyUseHTMLString: true
            });
        },
        evaluate(index){ // 立即评价
             let obj = {
                 createTime: this.orderListRes.list[index].createTime,
                 orderNo:this.orderListRes.list[index].orderNo,
                 productName:this.orderListRes.list[index].productName,
                 specs:this.orderListRes.list[index].specs,
                 productImage:this.orderListRes.list[index].productImage,
                 quantity:this.orderListRes.list[index].quantity,
             }
             this.$router.push({path:'/create_evaluate',query:obj})
        }
    }
}
</script>

<style lang="less" scoped>
@import url("../../theme/base.less");

.orderWarp{
    width:100%;
    display:flex;
    flex-direction:column;
    padding:20px 24px;
    .orderListHead{
        /deep/.el-tabs__item.is-active{
            color:@main-color;
        }
        /deep/.el-tabs__active-bar{
            background-color:@main-color;
        }
        /deep/.el-tabs__item{
            transition:all .2s linear;
        }
        /deep/.el-tabs__item:hover{
            color:@main-color;
        }
    }
    .orderList{
        margin-top:10px;
        .listTitle{
            height:40px;
            background:#eee;
            ul{
               width:100%;
               height:40px;
                li{
                    height:40px;
                    float:left;
                    line-height:40px;
                }
            }
        }
        .listWarp{
            margin-top:10px;
            .list{
                border:1px solid #e0e0e0;
                margin-bottom:10px;
                border-radius:2px;
                .orderTitle{
                    height:40px;
                    padding-left:15px;
                    background:#f6f6f6;
                    text-align:left;
                    line-height:40px;
                    span{
                        color:#999;
                    }
                }
                .orderMsg{
                    height:90px;
                    li{
                        height:100%;
                        float:left;
                        border-left:1px solid #e0e0e0;
                        &:nth-of-type(2),&:nth-of-type(4){
                            display:flex;
                            justify-content:center;
                            align-items:center;
                        }
                        &:nth-of-type(4){
                            color:@main-color;
                        }
                    }
                    .goodsMsg{
                        display:flex;
                        padding:14px;
                        .goodsImg{
                           height:60px;
                           width:60px;
                           background:url('../../assets/goodsBJ.jpg') no-repeat center center;
                           img{
                               width:100%;
                               height:100%;
                           }
                        }
                        .goodsTitle{
                           width:270px;
                           padding-left:15px;
                           text-align:left;
                           p{
                               font-size:15px;
                               color:#333;
                               text-align:left;
                               margin:2px 0px 4px;
                           }

                           span{
                               font-size:14px;
                               color:#999;
                           }
                        }
                        .goodsSum{
                            width:60px;
                            text-align:right;
                            padding-top:30px;
                            color:@main-color;
                        }
                    }
                    .money{
                        p{
                            font-size:15px;
                            margin:25px 0 2px
                        }
                        span{
                            color:#999;
                        }
                    }
                    .lastLi{
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                        align-content:center;
                        .el-button+.el-button{
                            margin:5px 0 0 0;
                        }
                    }
                }
            }
            .noneList{
              padding:80px 0 80px;
              color:#999;
              font-size:16px;
            }
            .el-button--danger{
                background-color:@hover-color;
                border-color:@hover-color;
                &:hover{
                    background-color:@hover-color-two;
                    border-color:@hover-color-two;
                }
            }
        }

        .page{  // 分页
            padding:35px 0 20px;
            /deep/.el-pagination.is-background .el-pager li.active{
                background:@main-color;
            }
            /deep/.el-pager li{
                border:1px solid #eee;
                border-radius:2px;
                transition:all .2s linear;
                &:hover{
                    color:#fff;
                    background:@main-color;
                    border-color:@main-color;
                }
            }
        }
    }

    /deep/.el-loading-spinner .path{
        stroke:@main-color;
    }
    /deep/.el-loading-spinner .el-loading-text{
        color:@main-color;
    }
}

</style>
