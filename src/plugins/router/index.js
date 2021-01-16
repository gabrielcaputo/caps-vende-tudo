import Vue from 'vue'
import Router from 'vue-router'
import views from '@/views'
import navGuards from './navGuards'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(error => {
    if (error && error.name && error.name !== 'NavigationDuplicated') {
      throw error
    }
    if (error && !error.name) throw error
  })
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...views
  ]
})

navGuards(router)

export default router
