import * as VueRouter from 'vue-router'

import BasicLayout from '@/layouts/basic'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true
  },
  {
    path: '',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          title: '仪表盘'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login'),
    meta: {
      title: '登录'
    }
  }
]

const router = VueRouter.createRouter({
  // mode: process.env.VUE_APP_HASH ? 'hash' : 'history',
  // base: process.env.VUE_APP_HASH ? '/' : process.env.BASE_URL,
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router
