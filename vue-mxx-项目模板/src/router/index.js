import Vue from 'vue'
import {globalVar} from '@/store/mutation-types'
import Store from '@/store'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Auth from '@/components/Auth';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Forget from '@/components/Forget';
import {ProductDetiail} from '@/components/product'
import {Buy,Pay} from '@/components/pay'
import {Center,Order,PersonImg,PersonPassword} from '@/components/center'
import {CreateEvaluate}  from '@/components/evaluate'
import {About,Contact,Introduce,Help} from '@/components/about'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      name:'电商',
      redirect: '/',
      meta:{
        title:'电商',
      },
          children:[{     // 根级页面
            path: '/',
            component: Home,
            meta:{
              title:'电商'
            },
          },{
            path:'/auth',
            component: Auth,
            redirect:'/login',
                children:[{
                  path:'/login',
                  component: Login,
                  name:'login',
                  meta:{
                    title:'登录'
                  }
                },{
                  path:'/register',
                  component: Register,
                  name:'register',
                  meta:{
                    title:'注册'
                  }
                },{
                  path:'/forget',
                  component: Forget,
                  name:'forget',
                  meta:{
                    title:'忘记密码'
                  }
                }]
          },{
            path:'/productDetiail',
            component: ProductDetiail,
            name:'productDetiail',
            meta:{
              title:'商品详情'
            }
          },{
            path:'/buy',
            component: Buy,
            name:'buy',
            meta:{
              title:'结算页',
              requireAuth: true,
            }
          },{
            path:'/pay',
            component: Pay,
            name:'pay',
            meta:{
              title:'支付页',
              requireAuth: true,
            }
          },{
            path:'/center',
            component: Center,
            name:'center',
            meta:{
              title:'个人中心',
              requireAuth: true,
            },
            redirect: '/order',
                children:[{
                    path:'order',
                    component: Order,
                    name:'order',
                    meta:{
                      title:'订单列表',
                      requireAuth: true,
                    }
                },{
                  path:'person_img',
                    component: PersonImg,
                    name:'person_img',
                    meta:{
                      title:'个人信息',
                      requireAuth: true,
                    }
                },{
                  path:'person_password',
                    component: PersonPassword,
                    name:'person_password',
                    meta:{
                      title:'个人信息',
                      requireAuth: true,
                    }
                }]
          },{
            path:'create_evaluate',
              component: CreateEvaluate,
              name:'create_evaluate',
              meta:{
                title:'订单评价',
                requireAuth: true,
              }
          },{
              path:'about',
              component: About,
              name:'about',
              meta:{
                title:'关于我们',
              },
              redirect: '/about/introduce',
                children:[{
                  path:'introduce',
                  component: Introduce,
                  name:'introduce',
                  meta:{
                    title:'关于我们', //企业简介
                  },
                },{
                  path:'contact',
                  component: Contact,
                  name:'contact',
                  meta:{
                    title:'关于我们', //联系我们
                  },
                },{
                  path:'help',
                  component: Help,
                  name:'help',
                  meta:{
                    title:'关于我们', //常见问题
                  },
                }],
          }]
    }
  ]
})


// 前端判断是否登录
router.beforeEach((to, from, next) => {
  // 判断是否进入登录页面或注册页面
  if(to.name == "login" || to.name == "register" || to.name == "forget"){
    Store.commit(globalVar.IS_HEADER,{status:false})
  }else{
    Store.commit(globalVar.IS_HEADER,{status:true})
  }


  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (sessionStorage.JRYG_TOKEN) {  // 通过vuex state获取当前的token是否存在
          next();
      }else {
          next({
            path: '/login',
            query: {redirect: from.fullPath,msg:'请您先登录'}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }else {
      next();
  }



  // console.log(to)
})

// 为页面添加title
router.afterEach((to,from)=>{
  if (!to.meta.title) {
    router.push('/')
    document.title = `今日易购-首页`
  }else{
    document.title = `今日易购-${to.meta.title}`
  }
})



export default router;
