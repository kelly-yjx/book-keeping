import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routerHistory = createWebHistory()
const router = createRouter({
  history:routerHistory,
  routes:[
    {
    path:'/',
    component: () => import('@/pages/homePage/index'),
  },
  {
    path:'/homePage',
    component: () => import('@/pages/homePage/index'),
  },
  {
    path:'/commin',
    component: () => import('@/pages/commin/index'),
  }
]
})
export default router