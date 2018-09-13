<template>
    <div class="buyWarp">
       <h3 class="title">填写并核对订单信息</h3>

        <div class="buyMsg">
           <div class="address">
               <div class="addressTitle">
                   <p class="title"><strong>收货人信息</strong></p>
                   <p class="addAdress" @click="addAdress(true)"><span>+</span>新增收货地址</p>
               </div>
              <ul class="addressList" v-show="shippingDataList">
                 <li v-for="(item,index) in shippingDataList" :key="index" @click="selectAddress(index,item.id)" :class="addressIndex == index?'active':''">
                    <div>
                       <span>{{item.receiverProvince}}</span>
                       <span>{{item.receiverCity}}</span>
                       <span>{{item.receiverDistrict}}</span>
                       <span>{{item.receiverAddress}}</span>
                       <span>{{item.receiverName}}(收)</span>
                       <span>{{item.receiverPhone}}</span>
                    </div>
                    <div class="btnWarp">
                        <el-button @click="editShipping(item.id,index)" type="primary" icon="el-icon-edit" size="mini"></el-button>
                        <el-button @click="deleteShipping(item.id)" type="primary" icon="el-icon-delete" size="mini"></el-button>
                    </div>
                 </li>
               </ul>
               <div v-show="!shippingDataList.length" class="addressNone">
                  暂无收货地址
               </div>
           </div>

           <div class="payType">
               <p class="title"><strong>收货人信息</strong></p>
               <div class="typeWarp">
                  <span>在线支付</span>
               </div>
           </div>

           <div class="payType">
               <p class="title"><strong>送货清单</strong></p>
               <div class="goodsWarp">
                   <div class="goodsTop">
                      <div class="titleImg">
                         <img :src="goodListData.image"/>
                      </div>
                      <div class="goodsMsg">
                         <p class="mainTile">{{goodListData.name}}</p>
                         <div class="subTitle">
                            <p>{{goodListData.specs.specs}}</p>
                            <p>{{this.$route.query.count}} / 箱</p>
                            <p>￥{{this.$route.query.count*goodListData.specs.salePrice}}</p>
                         </div>
                      </div>
                   </div>
                   <div class="goodsBottom">
                      <div class="otherMsg">
                          <p>商品运费</p>
                          <p>￥{{goodListData.fee}}</p>
                      </div>
                       <div class="otherMsg">
                          <p>发货时间</p>
                          <p>卖家承诺订单再买家付款后 {{goodListData.sendDate}}小时内发货</p>
                      </div>
                   </div>
               </div>
           </div>
        </div>




        <!--收货地址-->
        <el-dialog
            :title="addressTitle"
            :visible.sync="dialogVisible"
            :close-on-click-modal="false"
            width="48%"
            >
            <Address :msgObj="addressMsg" v-on:chliderClick="addAdress(false)"  v-on:chliderClickTwo="changeAddress"></Address>
        </el-dialog>

       <div class="submit">
           <div class="sureAddress">
                <span class="title">寄送地址：</span>
                <span>{{addressAll.receiverProvince || '暂无' }}</span>
                <span>{{addressAll.receiverCity}}</span>
                <span>{{addressAll.receiverDistrict}}</span>
                <span>{{addressAll.receiverAddress }}</span>
                <span class="title2">收货人：</span>
                <span>{{addressAll.receiverName || '暂无'}}(收)</span>
                <span>{{addressAll.receiverPhone}}</span>
           </div>
           <div class="payMoney">
              应付总额：
              <span>￥ {{ Math.floor((this.$route.query.count*goodListData.specs.salePrice + goodListData.fee) * 100) / 100  }}</span>
           </div>
           <div class="payBtn">
              <el-button @click="submitPay()" type="primary" :loading="isLoading">提交订单</el-button>
           </div>
       </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Address from './Address'

export default {
    data() {
        return {
            addressIndex:0,  // 地址index值
            dialogVisible:false,
            addressMsg:{
                msg:'',
                id:'',  // 收货地址id
            },
            addressTitle:'',
            isLoading:false,
            addressAll:{
                receiverProvince:'',
                receiverCity:'',
                receiverDistrict:'',
                receiverAddress:'',
                receiverName:'',
                receiverPhone:'',
            }
        }
    },
    created(){
        this.shippingRequest((res)=>{
            this.addressMsg.id =  this.shippingDataList[0]?this.shippingDataList[0].id:''; // 收货地址初始

            let shippingId = res.data.length == 0?'':res.data[0].id
            let obj = {
              productId: this.$route.query.productId,
              shippingId:shippingId,
              count:this.$route.query.count,
            }
            this.feeRequest(obj).then(res=>{
               this.goodList() // 获取运输清单
               this.changeAddress();
            })

            // this.goodList() // 获取运输清单
            // this.changeAddress();
        });

    },
    computed:{
        ...mapState('pay/shipping',['shippingDataList','goodListData'])
    },
    methods:{
        ...mapActions('pay/shipping',['shippingRequest','deleteShipingRequest','editInitData','resetShipping','goodsListRequest','createdOrderRequest','feeRequest']),
        changeAddress(){ // 显示寄送地址
            if(this.shippingDataList){
                 let index = this.addressIndex;
                 this.addressAll = Object.assign({},this.shippingDataList[index])
            }else{
                  this.addressAll = Object.assign({},{
                                                        receiverProvince:'',
                                                        receiverCity:'',
                                                        receiverDistrict:'',
                                                        receiverAddress:'',
                                                        receiverName:'',
                                                        receiverPhone:'',
                                                    })
            }
       
        },
        addAdress(state){ // 添加收货地址
            if(state){
                this.addressMsg.msg = 0;
                this.addressTitle = "正在添加收货地址"
            }
            this.resetShipping();
            this.dialogVisible = state;
        },
        selectAddress(index,id){
           this.addressIndex = index;
           this.addressMsg.id = id;
           this.changeAddress();
        },
        deleteShipping(id){  // 删除收货地址
            this.$confirm('此操作将永久删除该地址, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
                }).then(() => {
                    this.deleteShipingRequest(id).then(()=>{
                        this.$message({
                            type: 'success',
                            message: '删除成功!',
                            center:true,
                        });
                        this.shippingRequest(()=>{
                            this.addressIndex = 0;
                            this.addressMsg.id = this.shippingDataList.length !==0?this.shippingDataList[0].id: '';
                            this.changeAddress()
                        });

                    }).catch(()=>{
                         this.$message({
                            type: 'error',
                            message: '删除失败',
                            center:true,
                        });
                    })

                }).catch()
        },
        editShipping(id,index){ //编辑收货地址
             this.editInitData(index);
             this.addressMsg.msg = 1;
             this.addressMsg.id = id;
             this.addressTitle = "正在编辑收货地址";
             this.dialogVisible = true;
        },
        goodList(){  // 获取运送清单
            let shippingId = this.addressMsg.id || 0;
            let index = this.addressIndex;
            let count = this.$route.query.count;
            let specsId = this.$route.query.specsId;

            let obj = {
                  shippingId: this.addressMsg.id  || 0,
                  index: this.addressIndex,
                  count: this.$route.query.count,
                  specsId: this.$route.query.specsId,
            }
            this.goodsListRequest(obj);
        },
       submitPay(){ // 提交订单
            if(!this.shippingDataList.length){
                 this.$message({
                    type: 'warning',
                    message: '请先添加收货地址',
                    center:true,
                 });
                 return false;
            }
            this.isLoading = true;
            let obj = {
                count: this.$route.query.count,
                shippingId: this.addressMsg.id,
                specsId: this.$route.query.specsId,
            }
            this.createdOrderRequest(obj).then((res)=>{
                this.$router.push({path:'/pay',query:res.data})
                this.isLoading = false;
            }).catch(error=>{
                 this.$message({
                    type: 'error',
                    message: '哎呀，出错了！',
                    center:true,
                 });
                 this.isLoading = false;
            })
        }
    },
    components:{
        Address,
    }

}
</script>


<style lang="less" scoped>
@import url("../../theme/base.less");

.buyWarp{
    width:1200px;
    min-height:640px;
    margin:0 auto;
    .title{
        text-align:left;
        font-size:20px;
        color:#444;
    }
    .buyMsg{
        background:#fff;
        padding:20px;
        margin-top:10px;
        .address{
            padding:10px 30px;
            .addressTitle{
                display:flex;
                justify-content:space-between;
                .title{
                    font-size:18px;
                }
                .addAdress{
                    cursor:pointer;
                    transition:all .2s linear;
                    margin-bottom:10px;
                    span{
                        color:@main-color;
                    }
                    &:hover{
                         color:@main-color;
                    }
                }
            }
            .addressList{
                li{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    height:40px;
                    border:1px solid #eee;
                    border-radius:5px;
                    margin-top:10px;
                    padding:0 10px;
                    background:#f6f6f6;
                    cursor:pointer;
                    transition:all .2s linear;
                }
                .active{
                    border-color:@main-color;
                    color:@main-color;
                }
            }
            .addressNone{
                padding:15px;
                margin-top:10px;
                border:1px solid @minor-color;
                border-radius:5px;
                color:@minor-color;
            }
        }
        .payType{
            padding:10px 30px;
            .title{
                font-size:18px;
            }
            .typeWarp{
                display:flex;
                margin-top:15px;
                span{
                    display:inline-block;
                    width:100px;
                    height:42px;
                    border:1px solid @main-color;
                    padding:10px 20px;
                    border-radius:4px;
                    color:@main-color;
                }

            }
            .goodsWarp{
                .goodsTop{
                    display:flex;
                    justify-content:space-between;
                    margin-top:15px;
                    .titleImg{
                        width:70px;
                        height:70px;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .goodsMsg{
                        width:1000px;
                        border-bottom:1px dashed #eee;
                        padding-bottom:15px;

                        .mainTile{
                            margin-top:10px;
                            font-size:16px;
                            text-align:left;
                        }
                        .subTitle{
                            display:flex;
                            margin-top:15px;
                            color:@main-color;
                            font-size:14px;
                            text-align:right;
                            p:nth-of-type(1){
                               width:40%;
                               text-align:left;
                            }
                            p:nth-of-type(2){
                               width:20%;
                            }
                            p:nth-of-type(3){
                               width:40%;
                            }
                        }
                    }
                }
                .goodsBottom{
                    width:100%;
                    .otherMsg{
                        display:flex;
                        padding-left:100px;
                        margin-top:12px;
                        p{
                            width:50%;
                        }
                        p:nth-of-type(1){
                            text-align:left;
                        }
                        p:nth-of-type(2){
                            text-align:right;
                            color:@main-color;
                        }
                    }
                }
            }
        }

    }
    .submit{
        height:52px;
        display:flex;
        align-items:center;
        background:#fff;
        margin-top:10px;
        .sureAddress{
            width:70%;
            text-align:left;
            text-indent:40px;
            .title{
               font-size:14px;
            }
            .title2{
               font-size:14px;
               margin-left:15px;
            }
        }
        .payMoney{
            width:19%;
            padding-right:30px;
            text-align:right;
            font-size:14px;
            span{
                font-size:22px;
                color:@main-color;
            }
        }
        .payBtn{
            width:11%;
            height:100%;
            .el-button--primary{
                width:100%;
                height:100%;
                font-size:18px;
            }
        }
    }



        // element style
    /deep/.el-dialog__headerbtn .el-dialog__close{
        &:hover{
            color:@main-color;
        }
    }
    /deep/.el-button--primary{
        background-color:@main-color;
        border-color:@main-color;
        color:#fff;
        &:hover{
            background-color:@hover-color;
            border-color:@hover-color;
        }
    }
    /deep/.el-button--default{
        border-color:@main-color;
        color:@main-color;
    }
    /deep/.el-form-item__content{
        text-align:left;
    }
    .active  /deep/.el-button--mini{
        border-color:@main-color;
        background-color:@main-color;
    }
    /deep/.el-button--mini{
        padding:6px 6px;
        border-color:@minor-color;
        background-color:@minor-color;
    }
}

</style>
