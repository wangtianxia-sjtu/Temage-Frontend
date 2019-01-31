// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/index.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VCharts from 'v-charts'

import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true // ajax with coockie
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(iView)
Vue.use(BootstrapVue)
Vue.use(VCharts)
Vue.prototype.$ajax = axios

/* axios base url: change it when dispatch or integrate testing */
axios.defaults.baseURL = '101.132.73.215:3030'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
