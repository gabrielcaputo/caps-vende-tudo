import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './store'

import VuePageTransition from 'vue-page-transition'
import VTooltip from 'v-tooltip'

Vue.config.productionTip = false

Vue.use(VuePageTransition)
Vue.use(VTooltip)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')