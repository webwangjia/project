import {evaluateApi} from  '@/api'
import {evaluateMutation} from '../../mutation-types'


let evaluateReq = {
    type:'0',
    pageSize:10,
    pageNum:1,
}

const state = {
     evaluateData:{ 
         allCount:0,
         badCount:0,
         goodCount:0,
         comments:{
             total:'',
             pageNum:'',
             list:[]
         }
     },
     evaluateListReq:JSON.parse(JSON.stringify(evaluateReq)),

}

const actions = {
     evaluateListRequest({commit,state},id){ // 评论列表请求
        return new Promise((resolve,reject) => {
            let obj = Object.assign({},state.evaluateListReq)
            evaluateApi.evalulateList(id,obj).then((res)=>{
                // console.log(res)
                if(res.status == 200){
                    commit(evaluateMutation.EVALUATE_LIST,res.data)
                    resolve(res)
                }else{
                    reject(res)
                }
            })
           
            
        })
        
        
     },
     resetEvaluateData({commit}){
         commit(evaluateMutation.RESET_EVALUATE_DATA)
     }
}

const mutations = {
     [evaluateMutation.RESET_EVALUATE_DATA](state){
        state.evaluateListReq = Object.assing({},evaluateReq)
     },
     [evaluateMutation.EVALUATE_LIST](state,value){
        state.evaluateData = Object.assign(state.evaluateData,value)
     }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}