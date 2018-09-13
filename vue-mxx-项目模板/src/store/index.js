import Vue from 'vue'
import Vuex from 'vuex'
import {globalVar} from './mutation-types'
import createLogger from 'vuex/dist/logger'

import home from './modules/home'
import login from './modules/login'
import product from './modules/product'
import evaluate from './modules/evaluate'
import pay from './modules/pay'
import center from './modules/center'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    namespaced: true,    
    state: {
      isLogin:false, // 是否登录
      isLoading:true, // 是否加载
      isHeaderBlogroll:true, //是否显示头部或友情链接
      username:'', // 用户名
    }, 
    modules: {
        home,
        login, 
        product, 
        evaluate,
        pay,
        center,
    },
    actions: {
        loginCheck({commit},value){ // 检查是否已经登录或控制登录
            commit(globalVar.IS_LOGIN,value)
        },
        exitLogin({commit},value){ // 退出登录
            sessionStorage.clear();
            commit(globalVar.IS_LOGIN,value)
            return new Promise((resolve,reject)=>{
                resolve();
            })
        }
    },
    mutations: {
        [globalVar.IS_HEADER](state,value){ 
           state.isHeaderBlogroll = value.status
        },
        [globalVar.IS_LOGIN](state,value){  // 是否是登录的一些设置
            if(value){
                state.username = sessionStorage.JRYG_USERNAME;
            }else{
                state.username = "";  
            }
            state.isLogin = value;
            
        } 
    },
    strict: false,
    plugins: debug ? [createLogger()] : []
})

