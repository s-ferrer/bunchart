import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/profile.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

import UserList from '../views/user-list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/user-detail.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter(to, from, next) {
      if (store.state.user) return next('/profile')
      return next()
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter(to, from, next) {
      if (store.state.user) return next('/profile')
      return next()
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserList,
    beforeEnter(to, from, next) {
      if (store.state.user) return next('/login')
      return next()
    },
  },
  {
    path: '/auction',
    name: 'Auction',
    // route level code-splitting
    // this generates a separate chunk (auction.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "auction" */ '../views/auction.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
