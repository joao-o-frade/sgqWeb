import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import beforeEach from './beforeEach'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
})

// const router = new VueRouter({
//   routes: routes,
//   linkActiveClass: 'active',
//   hashbang: false,
//   history: true
// })
// linkActiveClass: 'active',
// mode: 'history',
// hashbang: false,
// history: true,
// routes

// mode: 'history',
// mode: 'html5',
// root:  '/user'

// routes: routes,
// linkActiveClass: 'active',
// hashbang: false,
// history: true

router.beforeEach(beforeEach)

export default router
