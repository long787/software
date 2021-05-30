import Vue from 'vue'
import App from './App.vue'

import store from './store'
//自动扫描里面的路由配置
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
