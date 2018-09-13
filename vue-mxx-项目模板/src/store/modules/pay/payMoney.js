import {payApi} from  '@/api'
import {payMutation} from '../../mutation-types'



const state = {
      payImg:{}, // 存储图片链接

}

const actions = {
      createPayRequest({commit},obj){ // 创建支付订单
         let token = {access_token: sessionStorage.JRYG_TOKEN}
         console.log(obj)
         return payApi.createPay(obj,token)
      },
      inquireOrderState({commit},orderId){ // 轮询查询订单状态
         let token = {access_token: sessionStorage.JRYG_TOKEN}
         return payApi.orderStatus(token,orderId)
      }

}

const mutations = {
      [payMutation.PAY_IMG](state,imgUrl){
      //   state.payImg = imgUrl;
      }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
