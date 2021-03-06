import Vue from 'vue'
import Router from 'vue-router'
import { Home,Login, main,Register} from '@/components/main-login-r'
import { About,ContactUs,Risktips,Question,AboutTwo} from '@/components/about'


Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: main,
      reject:'/',
          children:[{
            path:'/',
            component:Home,
            meta:{
              isLogin:true,
            }
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
                children:[{
                  path:'contactUs',
                  name:'联系我们',
                  component:ContactUs,
                },{
                  path:'risktips',
                  name:'风险提示',
                  component:Risktips,
                },{
                  path:'question',
                  name:'常见问题',
                  component:Question,
                },{
                  path:'aboutTwo',
                  name:'关于我们',
                  component:AboutTwo,
                }] 
          },
        ] 
    },
    
     
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){ // 需要登录
    if(!sessionStorage.TOKEN){ // 不存在token
        router.push('/login')
    }
  }

  next()

})

export default router