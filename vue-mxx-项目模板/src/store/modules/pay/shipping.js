import {payApi} from  '@/api'
import {payMutation} from '../../mutation-types'


let addShipping = {
      receiverAddress: "",  // 详细地址
      receiverName: "",
      receiverPhone: "",
}

const state = {
      shippingDataList:'', // 收货地址列表
      addShipping:JSON.parse(JSON.stringify(addShipping)),
      goodListData:{
          fee:'',
          image:'',
          name:'',
          sendDate:'',
          specs:{},
      },

}

const actions = {
      async shippingRequest({commit},callback=()=>{}){ // 获取收货人
         let obj = {
            access_token:sessionStorage.JRYG_TOKEN,
         }

         let data = await payApi.shipping(obj)
         commit(payMutation.SHIPPING_LIST,data.data)
         callback(data) // 回调函数
      },
      createdShippingRequest({commit,state},address){ // 创建收货地址请求
            let obj = Object.assign({},state.addShipping,address)
            let token = {access_token: sessionStorage.JRYG_TOKEN}
            return payApi.createShipping({token,obj})
      },
      deleteShipingRequest({commit},id){ // 删除收货地址请求
            let token = {access_token: sessionStorage.JRYG_TOKEN}
            return payApi.deleteShipping(token,id)
      },
      editInitData({commit},index){  //编辑收货地址时，初始化数据
            commit(payMutation.EDIT_INIT_DATA,index)
      },
      editRequest({commit,state},{id,address}){ // 编辑收货地址请求
            let obj = Object.assign({},{
                  access_token: sessionStorage.JRYG_TOKEN
            },state.addShipping,address)
            return  payApi.editShipping(obj,id)
      },
      resetShipping({commit}){ // 初始化收货地址
         commit(payMutation.RESET_SHIPPING)
      },
      feeRequest({commit},obj){
        let objNew = Object.assign({},{
            access_token: sessionStorage.JRYG_TOKEN,
            shippingId:obj.shippingId,
            count: obj.count,   
        })
        return payApi.calculate(objNew, obj.productId)
      },
      async goodsListRequest({commit,state},obj){  // 查询送货清单信息
            let objList = {
                  shippingId: obj.shippingId,
                  access_token:sessionStorage.JRYG_TOKEN,
                  province: null,
                  count: obj.count,
            }
            let data = await payApi.goodsList(objList,obj.specsId);

            commit(payMutation.GOODS_LIST,data.data)
      },
      createdOrderRequest({commit},obj){
            let token = {access_token:sessionStorage.JRYG_TOKEN}
            return payApi.createdOrders(obj,token)
      }

}

const mutations = {
     [payMutation.SHIPPING_LIST](state,value){
        state.shippingDataList = Object.assign([],value)
     },
     [payMutation.EDIT_INIT_DATA](state,index){
        state.addShipping = Object.assign({},state.shippingDataList[index])
     },
     [payMutation.RESET_SHIPPING](state){
        state.addShipping = Object.assign({},addShipping)
     },
     [payMutation.GOODS_LIST](state,obj){
        state.goodListData = Object.assign({},obj)
     }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
