// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
// import ElementUI from 'element-ui'
import fastClick from 'fastclick'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(Element, { size: 'small', zIndex: 3000 })
// Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
