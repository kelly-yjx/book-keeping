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
    meta:{title: '首页'},
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
      component: () => import('@/layout'),
      name: 'Sider',
      children:[{
          path: 'index',
          component: () => import('@/layout/header'),
          name: '123',
          meta: { title: '123' }
      }],
      meta: {
        title: '首页'
      }
    },{
      path: '/a',
      component: () => import('@/layout'),
      meta:{title: '首页'},
      children: [
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
  
    },
  ]
})

export default router