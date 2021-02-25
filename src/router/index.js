import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

// import Layout from '@/layout'
const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes: [{
    path: '/',
    component: () => import('@/layout'),
    children: [
        {
          path: '',
          component: () => import('@/pages/homePage/index'),
          name: 'HomePage',
          meta: {
            title: '首页'
          }
      },
      {
        path: 'homepage',
        component: () => import('@/pages/homePage/index'),
        name: 'HomePage',
        meta: {
          title: '首页'
        }
      },
      {
        path: 'commin',
        component: () => import('@/pages/commin/index'),
        name: 'Commin',
        meta: {
          title: '跳转页'
        }
      }
    ]

  },{
      path: '/header',
      component: () => import('@/layout/header'),
      name: 'Sider',
      meta: {
        title: '首页'
      }
    },
  ]
})

export default router