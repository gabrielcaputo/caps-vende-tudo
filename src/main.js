import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './store'

import VuePageTransition from 'vue-page-transition'
import VTooltip from 'v-tooltip'
import VueMasonry from 'vue-masonry-css'

Vue.config.productionTip = false

Vue.use(VuePageTransition)
Vue.use(VTooltip)
Vue.use(VueMasonry);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')