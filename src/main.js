import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './store'

import VuePageTransition from 'vue-page-transition'
import VTooltip from 'v-tooltip'
import VueMasonry from 'vue-masonry-css'
import VueMeta from 'vue-meta'
import VueLazyload from 'vue-lazyload'


const loadimage = require('./assets/images/loading.svg')

Vue.config.productionTip = false

Vue.use(VuePageTransition)
Vue.use(VTooltip)
Vue.use(VueMasonry)
Vue.use(VueMeta)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')