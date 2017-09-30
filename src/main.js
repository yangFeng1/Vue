import Vue from 'vue'
import router from './router'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
