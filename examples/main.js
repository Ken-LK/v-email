import Vue from 'vue'
import App from './App.vue'

//组件库
import vEmail from '../src/lib/email/index'
Vue.use(vEmail)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
