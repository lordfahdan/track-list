import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => import(/* webpackChunkName: "[request]" */ `@/${component}.vue`)
}

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: load('views/Home'),
  },
  {
    path: '/register',
    name: 'Register',
    component: load('views/Register'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: load('views/Login'),
    meta: { requiresAuth: true }
  },
  {
    path: '/songs',
    name: 'Songs',
    component: load('views/Songs'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
