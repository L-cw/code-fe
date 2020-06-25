export const examplesRoutes = [
  {
    path: 'examples',
    component: resolve => {
      require(['@/views/examples/layout.vue'], resolve)
    },
    children: [
      {
        path: '',
        component: resolve => {
          require(['@/views/examples/index.vue'], resolve)
        }
      },
      {
        path: 'odometer',
        component: resolve => {
          require(['@/views/examples/odometer.vue'], resolve)
        }
      },
      {
        path: 'seal',
        component: resolve => {
          require(['@/views/examples/seal.vue'], resolve)
        }
      }
    ]
  }
]