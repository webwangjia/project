import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/components/Home'
import {Login,Register} from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      reject:'/',
      children:[{
        path:'/',
        name:'首页',
        component:Home,
      },{ // 登录页面
        path:'/login',
        name:'登录',
        component:Login,
      },{ 
        path:'/register',
        name:'注册',
        component:Register,
      }]
    }
  ]
})
