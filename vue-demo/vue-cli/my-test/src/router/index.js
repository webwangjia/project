import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import {routerOne,dingshi} from '@/components'

import {All,One,Two} from '@/components/router'
import{total,yi,er} from '@/components/lianxiRouter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: HelloWorld
    },{
      path: '/test',
      component: Test
    },{
      path:'/dingshi',
      component:dingshi
    },{
      path:'/routeOne/:id/:msg', // 动态匹配路由
      component:routerOne
    },{
      path:'/all',
      component:All,
      redirect:'one', // 重定向到one
      children:[
        {
          path:'/one',
          props:{
            id:111,
            msg:'msg'
          },
          alias:'/repeatOne',
          component:One,
        },{
          path:'/two',
          component:Two,
        }
      ]
    },{
      path:'total',
      component:total,
      children:[
        {
          path:'/yi',
          component:yi,
        },{
          path:'/er',
          component:er,
        }
      ]
    }
  ]
})

router.beforeEach((to,form,next)=>{
  //  console.log(to)
  //  console.log(form)
   next()
})

export default router