import {productApi} from  '@/api'
import {productMutation} from '../../mutation-types'



const state = {
    products:{
       commit:'',
       product:{},
       specs:[{}],
    },

}

const actions = {
    async productsRequest({commit},str){ // 商品信息
        let res =   await  productApi.products(str);
        commit(productMutation.PRODUCTS,res.data)
        return res;
    },
    productSpecsRequest({commit},str){ // 商品规格
        productApi.productSpecs(str)
        commit(productMutation.PRODUCT_SPECS)
    }
 
}

const mutations = {
   [productMutation.PRODUCTS](state,value) {
      state.products = Object.assign(state.products,value)
   },
   [productMutation.PRODUCT_SPECS]() {

   }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}