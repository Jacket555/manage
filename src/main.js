import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store'
import echarts from 'echarts'
import Editor from '@tinymce/tinymce-vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Editor)
Vue.prototype.$echarts=echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
