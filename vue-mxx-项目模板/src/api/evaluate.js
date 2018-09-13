import request from '@/utils/request'
import {evaluateUrl} from './apis'


export default {
   evalulateList(id,obj){
        return request(evaluateUrl.EVALUATE_LIST,{
            patterns: [id],
            params: obj,
            
        })
   },
   createEvaluate(token,obj){
    return request(evaluateUrl.CREATED_EVALUATE,{
        method:'POST',
        data: obj,
        params: token,
        
    })
   }
}