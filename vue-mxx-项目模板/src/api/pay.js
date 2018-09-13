import request from '@/utils/request'
import {shippingUrl,orderUrl,payUrl} from './apis'


export default {
    shipping(obj){ // 获取收货地址
        return request(shippingUrl.SHIPPING,{
            params:obj,
        });
    },
    createShipping({token,obj}){ // 创建收货人
        return request(shippingUrl.SHIPPING,{
            method:'POST',
            params:token,
            data:obj,
        });
    },
    editShipping(obj,id){ // 编辑收货地址
        return request(shippingUrl.DELETE_EDIT_SHIPPING,{
            method:'PUT',
            params:obj,
            patterns:[id],
        });
    },
    deleteShipping(token,id){  //删除收货地址
        return request(shippingUrl.DELETE_EDIT_SHIPPING,{
            method:'DELETE',
            params:token,
            patterns:[id],
        });
    },
    calculate(obj,productId){ // 运费计算
        return request(shippingUrl.CALCULATE,{
          method:'GET',
          params:obj,
          patterns:[productId],
        })
    },
    goodsList(Obj,specsId){    // 货物运费清单
        return request(shippingUrl.GOODS_LIST,{
            params:Obj,
            patterns:[specsId],
        });
    },
    createdOrders(obj,token){   // 创建订单
        return request(orderUrl.CREATED_ORDERS,{
            method: 'POST',
            params:token,
            data:obj,
        });
    },

    createPay(obj,token){  // 获取支付二维码
        return request(payUrl.CREATE_PAY,{
            method:'POST',
            params:token,
            data: obj,
        });
    },
    orderStatus(token,orderId){ // 获取订单状态
        return request(orderUrl.INQUERY_ORDER_STATUS,{
            params:token,
            patterns:[orderId],
        });
    }

}
