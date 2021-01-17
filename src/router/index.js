import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Forgot from '../views/auth/forgotpassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: 'Login' }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { title: 'Register' }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: Forgot,
    meta: { title: 'Forgot Password' }
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
