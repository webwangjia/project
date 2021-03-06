import Vue from 'vue'
import Vuex from 'vuex' 
import createLogger from 'vuex/dist/logger'

import home from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    namespaced:true,
    modules:{
        home
    },
    state:{

    },
    actions:{

    },
    mutations:{

    },
    strict: false,
    plugins: debug ? [createLogger()] : []
})
