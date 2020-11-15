import { h } from 'vue'
import BasicLayout from '@/layouts/basic'

const RouteView = {
  name: 'RouteView',
  render: () => h('router-view')
}

export const basicRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard'),
    meta: {
      title: '仪表盘'
    }
  },
  {
    path: '/components',
    redirect: '/components/clipboard',
    component: RouteView,
    meta: {
      title: '组件',
      icon: 'component',
      permission: ['component']
    },
    children: [
      {
        name: 'clipboard',
        path: '/components/clipboard',
        component: () => import('@/views/base/clipboard'),
        meta: {
          title: '复制',
          permission: ['clipboard']
        }
      },
      {
        name: 'qrcode',
        path: '/components/qrcode',
        component: () => import('@/views/base/qrcode'),
        meta: {
          title: '二维码',
          permission: ['qrcode']
        }
      }
    ]
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/views/user'),
    meta: {
      title: '账号管理',
      icon: 'user',
      permission: ['user']
    }
  },
  {
    name: 'role',
    path: '/role',
    component: () => import('@/views/role'),
    meta: {
      title: '角色管理',
      icon: 'role',
      permission: ['role']
    }
  },
  {
    name: 'resource',
    path: '/resource',
    component: () => import('@/views/resource'),
    meta: {
      title: '权限管理',
      icon: 'resource',
      permission: ['resource']
    }
  },
  {
    name: 'admin',
    path: '/admin',
    meta: {
      title: 'admin页面',
      icon: 'admin',
      permission: ['adminPage']
    },
    component: () => import('@/views/permission/admin')
  },
  {
    name: 'dev',
    path: '/dev',
    meta: {
      title: 'dev页面',
      icon: 'dev',
      permission: ['devPage']
    },
    component: () => import('@/views/permission/dev')
  },
  {
    name: 'guest',
    path: '/guest',
    meta: {
      title: 'guest页面',
      icon: 'guest',
      permission: ['guestPage']
    },
    component: () => import('@/views/permission/guest')
  },
  {
    name: 'test',
    path: '/test',
    meta: {
      title: 'test页面',
      icon: 'test',
      permission: ['testPage']
    },
    component: () => import('@/views/permission/test')
  },
  {
    name: 'operation',
    path: '/operation',
    meta: {
      title: 'operation页面',
      icon: 'operation',
      permission: ['operationPage']
    },
    component: () => import('@/views/permission/operation')
  }
]

export const blankRoutes = [
  // ...
]

export const routes = [].concat(
  basicRoutes,
  blankRoutes
)

export default [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true
  },
  {
    path: '/',
    hidden: true,
    component: BasicLayout,
    children: basicRoutes
  },
  ...blankRoutes
]
