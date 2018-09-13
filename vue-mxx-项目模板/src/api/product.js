import request from '@/utils/request'
import {productUrl,agentUrl} from './apis'


export default {
     products(str) {  // 商品详情
        return request(productUrl.PRODUCTS,{
            patterns:[str]
        });
     },
     productSpecs(str) { // 商品规格信息
        return request(productUrl.PRODUCTS_SPECS,{
            patterns:[str]
        });
     },
     agent(obj){  // 代理请求
        return request(agentUrl.AGENT,{
            method:'POST',
            data:obj,
        });
     }
}