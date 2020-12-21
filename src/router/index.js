import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import dashboard from '@/components/dashboard'

import Login from '@/components/pages/login'
import Cart from '@/components/pages/cart'
import CheckList from '@/components/pages/checkList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'index',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    { 
      path: '/admin',
      name: 'admin',
      component: dashboard,
      children:[
        {
          path: 'checkList',
          name: 'checkList',
          component: CheckList,
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart,
        },
      ]
    },
  ]
})


