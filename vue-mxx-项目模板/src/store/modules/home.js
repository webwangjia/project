import {homeApi} from  '@/api'
import {homeMutation} from '../mutation-types'


const state = {
   banner:['../static/banner.jpg'],
   product:{},  // 产品
   specs:{},    // 规格
}

const actions = {
    homeRequest({commit}){ // 首页数据请求
        homeApi.home().then(res=>{
            let product = res.data.product;
            let specs = res.data.specs;
            commit(homeMutation.HOME,{product,specs})
        }).catch(error =>{
            // console.log("接收")
            // console.log(error.response)
        })
    },

}

const mutations = {
    [homeMutation.HOME](state,values){
       state.product = values.product;
       state.specs = values.specs;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
