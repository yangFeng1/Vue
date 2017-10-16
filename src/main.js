import Vue from 'vue'
import router from './router'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'
import mintUi from 'mint-ui'
import echarts from 'echarts'
Vue.config.productionTip = false
Vue.use(Element)
Vue.use($)
Vue.use(mintUi)
Vue.use(echarts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
