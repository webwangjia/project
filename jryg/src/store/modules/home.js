import homeApi from '@/api/home'

const state = {
      homeData:{}, // 存储首页数据
}

const actions = {
      homeRequest({commit}){
         homeApi.homeReq().then(res=>{
            console.log(res)
         })
      }
}

const mutations = {

}


export default {
    namespaced:true,
    state,
    actions,
    mutations,
}