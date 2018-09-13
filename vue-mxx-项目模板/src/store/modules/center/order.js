import {centerApi} from  '@/api'
import {orderMutation} from '../../mutation-types'


const state = {
    orderListRes:{
       list:[]
    },

}

const actions = {
    orderListRequest({commit},obj){  // 订单列表请求
        return new Promise((resolve,reject)=>{
           centerApi.orderList(obj).then(res=>{
              commit(orderMutation.ORDER_LIST,res.data.orders)
              resolve(res)
           }).catch((error)=>{
              reject(error)
           })
        })
    },
    refundPayRequest({commit,state},orderNo){
        let token = {access_token:sessionStorage.JRYG_TOKEN};
        return centerApi.refundPay(token,orderNo)
    },
    confirmationRequest({commit},orderId){
        let token = {access_token:sessionStorage.JRYG_TOKEN};
        return centerApi.confirmationOrder(token,orderId)
    }
}

const mutations = {
      [orderMutation.ORDER_LIST](state,obj){
         let token = {access_token:sessionStorage.JRYG_TOKEN};
         state.orderListRes = Object.assign({},obj)
      }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
