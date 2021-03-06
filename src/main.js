import 'normalize.css/normalize.css' // A modern alternative to CSS resetsß
import '@/assets/styles/reset.scss'
import '@/assets/styles/common.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import '@/assets/styles/element-ui-reset.scss'
import codeConfig from '@/utils/codeConfig'

locale.use(lang)
Vue.use(ElementUI)

import filters from './utils/filter'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$codeConfig = codeConfig
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
