// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

// swipe轮播模块全局注册
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// ElementUI模块全局注册
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// import './assets/styles/px2rem.scss'放这没用

// 引入ele.UI后使用中间件，即注册组件
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper, {})

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
