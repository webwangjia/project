<template>
    <div class="addressProp">
        <div class="content">
            <el-form :model="addShipping" status-icon :rules="addressRules" ref="addressForm">
                <el-form-item label="所在地区：" :label-width="formLabelWidth">
                    <Distpicker
                     :province="address.receiverProvince"
                     :city="address.receiverCity"
                     :area="address.receiverDistrict"
                       @province="onChangeProvince"
                       @city="onChangeCity"
                       @area="onChangeArea">
                    </Distpicker>
                </el-form-item>
                <el-form-item label="详细地址："  prop="receiverAddress"  :label-width="formLabelWidth">
                   <el-input v-model="addShipping.receiverAddress" auto-complete="off" placeholder="请输入详细地址"></el-input>
                </el-form-item>
                <el-form-item label="收货人："  prop="receiverName"  :label-width="formLabelWidth">
                   <el-input v-model="addShipping.receiverName" auto-complete="off" placeholder="请填写联系人姓名"></el-input>
                </el-form-item>
                <el-form-item label="联系人电话："  prop="receiverPhone"  :label-width="formLabelWidth">
                   <el-input v-model="addShipping.receiverPhone" auto-complete="off" placeholder="请填写联系人手机号"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialogVisible">取 消 </el-button>
                <el-button v-if="msgObj.msg == 0" type="primary" @click="createShipping">保 存</el-button>
                <el-button v-if="msgObj.msg == 1" type="primary" @click="editShipping">修 改</el-button>
        </div>
    </div>
</template>


<script>
import {mapState,mapActions} from 'vuex'
import {Phone} from '@/public/rules'

import Distpicker from 'v-distpicker'


 export default {
     data() {
         return {
             addressRules:{
               receiverAddress:[{required:true,message:'请输入详细地址', }],
               receiverName:[{required:true,message:'请填写收货人姓名', }],
               receiverPhone:[
                     {required:true,message:'手机号不能为空'},
                     {validator: Phone, trigger: 'blur'}
                   ],
             },
             formLabelWidth:"120px",
             address:{
                  receiverCity: "北京城区",    // 市
                  receiverDistrict: "丰台区", // 区
                  receiverProvince: "北京市", // 省
             }
         }
     },
     props:['msgObj'],
     computed:{
         ...mapState('pay/shipping',['addShipping']),
     },
     methods:{
        ...mapActions('pay/shipping',['shippingRequest','createdShippingRequest','editRequest']),
        onChangeCity(city){
             this.address.receiverCity = city.value;
        },
        onChangeArea(Area){
            this.address.receiverDistrict = Area.value
        },
        onChangeProvince(Province){
            this.address.receiverProvince = Province.value
        },
        closeDialogVisible(){ // 弹框显示隐藏
             this.$emit('chliderClick')
        },
        createShipping(){ // 添加收货人
            this.$refs['addressForm'].validate((valid) => {
                 if (valid) {
                    this.createdShippingRequest(this.address).then(res=>{
                         this.$message({
                            message: '添加收货地址成功',
                            type: 'success',
                            center: true,
                         });
                         this.shippingRequest((data)=>{
                               this.$emit('chliderClickTwo')
                               let addressList = data.data
                               if(addressList.length == 1){
                                  this.msgObj.id= addressList[0].id
                               }

                         });
                    }).catch(error=>{
                        this.$message({
                            message: '添加收货地址失败',
                            type: 'error',
                            center: true,
                        });
                    });

                    this.closeDialogVisible()
                 }
            })

        },
        editShipping(){  // 编辑收货地址请求
           this.editRequest({id:this.msgObj.id,address:this.address}).then(res=>{
                this.$message({
                    message: '修改收货地址成功',
                    type: 'success',
                    center: true,
                });
                this.shippingRequest();
           }).catch(error=>{
                this.$message({
                    message: '修改收货地址失败',
                    type: 'error',
                    center: true,
                });
           })
           this.closeDialogVisible()
        }
     },
     components:{
         Distpicker,
     }
 }
</script>



<style lang="less" scoped>
@import url("../../theme/base.less");


.addressProp{
    .content{
        padding:10px 20px;

    }
}


</style>
