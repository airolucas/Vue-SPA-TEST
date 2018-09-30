import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('./views/Users.vue')
    },
    {
      path: '/users/:id',
      name: 'UserDetails',
      component: () => import('./views/UserDetails.vue')
    }
  ]
})
