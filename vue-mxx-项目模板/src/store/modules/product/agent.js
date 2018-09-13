import {productApi} from  '@/api'
import {productMutation} from '../../mutation-types'


let agent = {
        area: "",
        name: "",
        phone: "",
        type: "1",
}

const state = {
      agent:JSON.parse(JSON.stringify(agent))
}

const actions = {
     resetAgent({commit}){  // 代理内容重置
        commit(productMutation.RESET_AGENT)
     },
     agentRequest({commit,state}){ // 代理请求
        return productApi.agent(state.agent)
     }
 
}

const mutations = {
   [productMutation.RESET_AGENT](state){
      state.agent = Object.assign(state.agent,agent);
   }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}