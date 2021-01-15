import Vue from 'vue'
import Router from 'vue-router'
import views from '@/views'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...views
  ]
})

export default router
