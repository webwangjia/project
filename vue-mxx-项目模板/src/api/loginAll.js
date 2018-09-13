import request from '@/utils/request'
import {loginUrl} from './apis'
import MD5 from 'js-md5'

import axios from 'axios'
export default {
     login(value){ // 登录请求
        // axios.post('/login')
        return request(loginUrl.LOGIN,{
            method:'POST',
            params: value,
            headers:{
               'Content-Type':"application/x-www-form-urlencoded; charset=UTF-8",
               "Authorization": "Basic " + btoa("jregou-pc:jregou-pc-secret")
            }
        })
     },
     imgCode(value){ // 图片验证码校验
         return request(loginUrl.REFIST_IMG_CODE,{
           method:'POST',
           data:value,
         })
     },
     forgetImgCode(value){ // 修改密码图片验证
         return request(loginUrl.FORGET_IMG_CODE,{
             method:'POST',
             data:value,
         })
     },
     forgetPassword(value){ // 忘记密码
        return request(loginUrl.FORGET_PASSWORD,{
            method:'POST',
            data:value,
        })
     },
     register(value){  // 注册
        return request(loginUrl.REGISTER,{
            method:'POST',
            data:value,
        })
     }
     
}