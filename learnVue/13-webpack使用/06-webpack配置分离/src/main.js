// 使用Vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'

require('./css/normal.css');

require('./css/special.less');

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
});
document.writeln('<span>哈哈哈</span>');
