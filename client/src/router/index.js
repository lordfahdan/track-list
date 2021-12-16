import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => import(/* webpackChunkName: "[request]" */ `@/${component}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: load('views/Home')
  },
  {
    path: '/register',
    name: 'Register',
    component: load('views/Register')
  },
  {
    path: '/login',
    name: 'Login',
    component: load('views/Login')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
