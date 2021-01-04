import Vue from 'vue'
import App from './App.vue'
// 发布版本不会产生提示信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
