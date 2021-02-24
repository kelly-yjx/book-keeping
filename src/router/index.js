import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Layout from '@/layout/index'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [{
    path: '/',
    redirect: '/homePage',
    component: Layout,
    // children: [
    //   {
    //     path: 'homePage',
    //     component: () => import('@/pages/homePage/index'),
    //     name: 'HomePage',
    //     meta: {
    //       title: '首页'
    //     }
    //   },
    //   {
    //     path: 'commin',
    //     component: () => import('@/pages/commin/index'),
    //     name: 'Commin',
    //     meta: {
    //       title: '跳转页'
    //     }
    //   }
    // ]
  }]
})
export default router