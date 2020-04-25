import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import StudentAPIService from '@/services/StudentService'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.prototype.$student_api = StudentAPIService // Vue.prototype allows the StudentAPIService to be available to all other components in the app

new Vue({  // this renders and builds in the app on load 
  render: h => h(App),
}).$mount('#app')
