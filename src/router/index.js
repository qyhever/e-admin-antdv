import * as VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
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
