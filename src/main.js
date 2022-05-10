import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'
import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

Vue.component('country-flag', CountryFlag)

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
