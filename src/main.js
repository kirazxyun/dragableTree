import Vue from 'vue'
import App from './App'
import store from './store'
import './assets/iview.css'
import './styles/index.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
