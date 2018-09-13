import {centerApi} from  '@/api'
import {userMutation} from '../../mutation-types'


let changePassword = {
    newPassword:'',
    oldPassword:'',
    repeatPassword:'',
}

const state = {
      changePassword:JSON.parse(JSON.stringify(changePassword)),

}

const actions = {
      changePasswordRequest({commit,state}){
         let token = {access_token:sessionStorage.JRYG_TOKEN};
         return centerApi.changePassword(token,state.changePassword)
      },
      resetPassword({commit}){
         commit(userMutation.RESET_PASSWORD)
      },
      uploadImgRequest({commit},data){
        let token = {access_token:sessionStorage.JRYG_TOKEN};
        return centerApi.uploadImg(token,data)
      }
}

const mutations = {
      [userMutation.RESET_PASSWORD](state){
          state.changePassword = Object.assign({},changePassword)
      }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}