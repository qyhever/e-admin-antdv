import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { notification } from 'ant-design-vue'
import router from './router'
import store from './store'
import { getToken } from '@/utils/local'

const whiteList = ['/login']
const loginPagePath = '/login'
const homePagePath = '/dashboard'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === loginPagePath) {
      // 重定向到首页
      next({ path: homePagePath })
      NProgress.done()
    } else {
      store
        .dispatch('user/GetInfo')
        .then()
        .catch(() => {
          notification.error({
            message: '错误',
            description: '请求用户信息失败，请重试'
          })
          // store.dispatch('Logout').then(() => {
          //   next({ path: loginPagePath })
          // })
        })
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      // 在免登录白名单列表，直接放行
      next()
    } else {
      // 重定向到登录页
      next({ path: loginPagePath })
      NProgress.done()
    }
  }
})

router.afterEach((to, from, next) => {
  NProgress.done()
})
