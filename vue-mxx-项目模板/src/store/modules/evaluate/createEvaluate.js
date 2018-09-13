import {evaluateApi} from  '@/api'
import {evaluateMutation} from '../../mutation-types'


const state = {
      evaluateData:{
        grade: 0,
        info: "",
      }
}

const actions = {
      createEvaluateRequest({commit,state},orderNo){
          let token = {access_token:sessionStorage.JRYG_TOKEN};
          let obj = Object.assign({},state.evaluateData,{orderNo})
          return evaluateApi.createEvaluate(token,obj)
      }
}

const mutations = {
    
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}