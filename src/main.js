import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.css'

Vue.prototype.$ajax = axios
Vue.config.productionTip = false
axios.defaults.baseURL="";

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  
})
