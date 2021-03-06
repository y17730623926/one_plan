import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$http = axios;


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//拦截请求
axios.interceptors.request.use(config => {
  // console.log(config);
  if (store.state.token) {
    config.headers['Authorization'] = `Bearer ${store.state.token}`;
  }
  return config;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
