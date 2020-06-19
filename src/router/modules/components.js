export const componentsRoutes = [
  {
    path: 'components',
    component: resolve => {
      require(['@/views/components/index.vue'], resolve)
    }
  },
  {
    path: 'components/odometer',
    component: resolve => {
      require(['@/views/components/odometer.vue'], resolve)
    }
  },
  {
    path: 'components/seal',
    component: resolve => {
      require(['@/views/components/seal.vue'], resolve)
    }
  }
]