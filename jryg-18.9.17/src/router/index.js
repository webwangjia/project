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
            path: '/about',
            component: About,
            reject:'/about/contactUs',
                children:[{
                  path:'/contactUs',
                  component:ContactUs,
                },{
                  path:'/risktips',
                  name:'登录',
                  component:Risktips,
                },{
                  path:'/question',
                  name:'注册',
                  component:Question,
                }] 
          },
        ] 
    },
    
     
  ]
})