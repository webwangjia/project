import Vue from 'vue'
import Router from 'vue-router'
import { Home,Login, main,Register,About,ContactUs} from '@/components'
import {  Header,Footer} from '@/layout'




Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: main,
      reject:'/',
      children:[{
        path:'/',
        name:'首页',
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
      }]
    },
     
  ]
})