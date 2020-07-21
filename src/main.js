import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式
import './assets/css/global.css'
// 导入mui
import '../dist/css/mui.min.css'
Vue.config.productionTip = false
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
