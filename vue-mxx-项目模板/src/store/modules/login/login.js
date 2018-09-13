import {loginApi} from  '@/api'
import {loginAllMutation} from '../../mutation-types'


const state = {
     loginData:{
        username:'',
        password:'',
     },
     isLoading:false,
}

const actions = {
     loginRequest({commit,state}){
        commit(loginAllMutation.LOADING_TRUE)
        return new Promise((resolve,reject) =>{
            loginApi.login(state.loginData).then(res=>{
                sessionStorage.JRYG_TOKEN = res.data.access_token;  
                sessionStorage.JRYG_USERNAME = state.loginData.username;  
                resolve(res)
                commit(loginAllMutation.LOADING_FALSE)
            }).catch(error=>{
                reject(error)
                commit(loginAllMutation.LOADING_FALSE)
            })
        })
     
     },
     resetLoginData({commit}){
        commit(loginAllMutation.RESET_DATA)
     }
     
}

const mutations = {
     [loginAllMutation.LOADING_TRUE](state){
        state.isLoading = true;
     },
     [loginAllMutation.LOADING_FALSE](state){
        state.isLoading = false;
     },
     [loginAllMutation.RESET_DATA](state){
        state.loginData = Object.assign(state.loginData,{
            username:'',
            password:'',
        })
     }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}