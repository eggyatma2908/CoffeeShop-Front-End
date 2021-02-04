import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import UUID from 'vue-uuid'
import VueAWN from 'vue-awesome-notifications'
require('vue-awesome-notifications/dist/styles/style.css')

Vue.use(UUID)
Vue.use(Vuelidate)
Vue.use(VueAWN)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
