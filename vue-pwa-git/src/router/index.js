import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Home from '@/page/Home'
import Detail from '@/page/Detail'
import Pwa from '@/page/Pwa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: '/pwa',
          name: 'pwa',
          component: Pwa
        }
      ]
    }
  ]
})
