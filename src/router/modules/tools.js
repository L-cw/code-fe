export const toolsRoutes = [
  {
    path: 'tools',
    component: resolve => {
      require(['@/views/tools/layout.vue'], resolve)
    },
    children: [
      {
        path: '',
        component: resolve => {
          require(['@/views/tools/index.vue'], resolve)
        }
      },
      {
        path: 'pic/solid-color',
        component: resolve => {
          require(['@/views/tools/solidColor.vue'], resolve)
        }
      },
      {
        path: 'pic/solid-color-text',
        component: resolve => {
          require(['@/views/tools/solidColorText.vue'], resolve)
        }
      }
    ]
  }
]