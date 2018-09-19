import Vue from 'vue'
import Router from 'vue-router'
import { Home,Login, main,Register} from '@/components/main-login-r'
import { About,ContactUs,Risktips,Question} from '@/components/about'






Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: main,
      reject:'/',
      children:[{
        path:'/',
        component:Home,
      },{
        path:'/login',
        name:'登录',
        component:Login,
      },{
        path:'/register',
        name:'注册',
        component:Register,
      },{
        path:'/about',
        name:'关于我们',
        component:About,
      },{
        path:'/contactUs',
        name:'联系我们',
        component:ContactUs,
      },{
        path:'/risktips',
        name:'风险提示',
        component:Risktips,
      },{
        path:'/question',
        name:'常见问题',
        component:Question,
      }]
    },
     
  ]
})