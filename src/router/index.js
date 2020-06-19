import Vue from 'vue'
import VueRouter from 'vue-router'
import { componentsRoutes } from './modules/components'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: resolve => {
      require(['@/views/layout/index.vue'], resolve)
    },
    children: [
      {
        path: '',
        component: resolve => {
          require(['@/views/index.vue'], resolve)
        }
      },
      ...componentsRoutes
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
