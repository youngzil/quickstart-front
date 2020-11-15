import Vue from 'vue'
import App from './App.vue'

// 注册全局组件
// 1. 引入组件
/*import Users3 from './myComponents/Users'
// 2. 注册全局组件
Vue.component("Users4",Users3);*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
