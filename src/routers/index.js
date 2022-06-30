import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    component: () => import('../views/Layout'),
    children: [
      {
        path: '/layout/home',
        component: () => import('../views/Home')
      },
      {
        path: '/layout/search',
        component: () => import('../views/Search')
      }
    ]
  },
  {
    path: '/play',
    component: () => import('../views/Paly')
  }
]

const router = new VueRouter({
  routes
})

export default router
