import request from '@/utils/request'
import {orderUrl,payUrl,userUrl} from './apis'


export default {
    orderList(obj){ // 订单列表
        return request(orderUrl.ORDERS,{
            params: obj,
        })
    },
    refundPay(token,orderNo){ // 取消订单
        return request(payUrl.REFUND_PAY,{
            patterns: [orderNo],
            params: token,
        })
    },
    confirmationOrder(token,orderId){ // 确认订单（收货）
        return request(orderUrl.CONFIRMATION_ORDER,{
            patterns: [orderId],
            params: token,
        })
    },
    changePassword(token,obj){  // 修改密码
        return request(userUrl.CHANGE_PASSWORD,{
            method:'POST',
            params: token,
            data: obj,
        })
    },
    uploadImg(token){  // 上传头像
        return request(userUrl.UPLOAD_IMG,{
            params: token,
        })
    }

}
