// 请求方法

import request from '@/utils/request'
import {homeUrl} from './apis'

export default {
    homeReq(){ 
        return request(homeUrl.HOME,{

        })
    }
}