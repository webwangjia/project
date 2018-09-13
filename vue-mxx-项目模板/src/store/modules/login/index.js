import login from './login'
import register from './register'
import forget from './forget'


export default {
    namespaced: true,
    modules:{
        login,
        register,
        forget,
    }
}