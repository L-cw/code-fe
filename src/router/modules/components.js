export const componentsRoutes = [
  {
    path: 'components',
    component: resolve => {
      require(['@/views/components/layout.vue'], resolve)
    },
    children: [
      {
        path: '',
        component: resolve => {
          require(['@/views/components/index.vue'], resolve)
        }
      },
      {
        path: 'odometer',
        component: resolve => {
          require(['@/views/components/odometer.vue'], resolve)
        }
      },
      {
        path: 'seal',
        component: resolve => {
          require(['@/views/components/seal.vue'], resolve)
        }
      },
      {
        path: 'code-block',
        component: resolve => {
          require(['@/views/components/codeBlock.vue'], resolve)
        }
      },
      {
        path: 'auto-show-tip',
        component: resolve => {
          require(['@/views/components/autoShowTip.vue'], resolve)
        }
      }
    ]
  }
]