import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// Register a global custom directive called `v-focus`
Vue.directive('autofocus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})

new Vue({
  router,
  store,
  data: {
    rootTest: 'data from root vue instance'
  },
  render: function (h) { return h(App) }
}).$mount('#app')
