import {loginApi} from  '@/api'
import {loginAllMutation} from '../../mutation-types'



let forgetData = {
    code: "", //手机验证码
    password: "",
    phone: "",
    repeatPassword:'',
    captcha:'', // 图片验证码
}

const state = {
     forgetData:JSON.parse(JSON.stringify(forgetData)),
     imgUrl:'',
}

const actions = {
    imgUrlRequest({commit, state},values){
        let url = `/api/kaptcha.jpg?phone=${values}&t=${new Date().getTime()}`;
        commit(loginAllMutation.REGISTER_IMG_URL,url)
    },
    imgCodeRequest({commit,state}){
        let obj = {
            captcha:state.forgetData.captcha,
            phone:state.forgetData.phone,
        }
        return loginApi.forgetImgCode(obj)
    },
    forgetPasswordRequest({commit},values){
        return loginApi.forgetPassword(values)
    },
    resetData({commit,state}){
       commit(loginAllMutation.RESET_DATA)
    } 
}

const mutations = {
    [loginAllMutation.REGISTER_IMG_URL](state,values){
        state.imgUrl = values;
    },
    [loginAllMutation.RESET_DATA](state){
        state.forgetData = Object.assign(state.forgetData,forgetData)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}