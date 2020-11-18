import Vue from 'vue'
import Router from 'vue-router'
import shoppingWeb from '@/components/shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingweb',
      component: shoppingWeb
    }
  ]
})
