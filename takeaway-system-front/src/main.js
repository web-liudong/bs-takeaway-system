// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer' // 加载mockServer即可
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.jpg'
import './filters' // 加载过滤器
Vue.component(Button.name,Button) // 注册全局标签
Vue.use(VueLazyload,{
  loading
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
