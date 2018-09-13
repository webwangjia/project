import {loginApi} from  '@/api'
import {loginAllMutation} from '../../mutation-types'

let registerData = {
    code: "",
    password: "",
    username: "",
    repeatPassword:'',
    imgCorde:'',
    type:true,
}

const state = {
     registerData:JSON.parse(JSON.stringify(registerData)),
     imgUrl:'',
}

const actions = { 
     imgUrlRequest({commit, state},values){  // 图片地址请求
        let url = `/api/kaptcha.jpg?phone=${values}&t=${new Date().getTime()}`;
        commit(loginAllMutation.REGISTER_IMG_URL,url)
     },
     imgCodeRequest({commit,state},callback){ // 图片验证码请求
        let obj = Object.assign({},{
            captcha: state.registerData.imgCorde,
            phone: state.registerData.username,
        })
            loginApi.imgCode(obj).then(res=>{
                callback(res)
            }).catch(error=>{
                callback(error)
            });
       
     },
     registerRequest({commit,state}){ // 注册请求
       let obj = {
           code: state.registerData.code,
           password: state.registerData.password,
           username: state.registerData.username,
       }
       return  loginApi.register(obj);
     },
     resetData({commit,state}){ // 重置数据
        commit(loginAllMutation.RESET_DATA)
     } 
}

const mutations = {
    [loginAllMutation.REGISTER_IMG_URL](state,values){
        state.imgUrl = values;
    },
    [loginAllMutation.RESET_DATA](state){
        state.registerData = Object.assign(state.registerData,registerData)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}