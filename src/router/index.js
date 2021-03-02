import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Layout from '@/layout'
const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes: [{
      path: '/',
      component: Layout,
      redirect: '/header',
      meta: {
        title: '主页'
      },

    },
    {
      path: '/header',
      component: Layout,
      name: 'h',
      meta: {
        title: '主页1'
      },
      children: [{
        path: '',
        component: () => import('@/pages/homePage/index'),
        name: 'homePage',
        meta: {
          title: '首页'
        }
      }, ]
    },

    {
      path: '/a',
      component: Layout,
      meta: {
        title: '列表页'
      },
      children: [{
          path: 'b',
          component: () => import('@/pages/commin/index'),
          name: '5',
          meta: {
            title: '首页'
          }
        },
        {
          path: 'c',
          component: () => import('@/pages/commin/index'),
          name: 'c',
          meta: {
            title: '跳转页'
          }
        }
      ]

    },
    {
      path: '/bbb',
      component: Layout,
      meta: {
        title: '详情页'
      },
      name: '10',
      children: [{
        path: '',
        component: () => import('@/pages/homePage/index'),
        name: '1',
        meta: {
          title: '首页'
        }
      }, ]
    }
  ]
})

export default router