import Vue from 'vue'
import VueRouter from 'vue-router'
import Maker from '../views/Maker.vue'
import Login from '../views/Login.vue'
import Checker from '../views/Checker.vue'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/maker',
    name: 'Maker',
    component: Maker
  },
  {
    path: '/checker',
    name: 'Checker',
    component: Checker

  },
  {
    path: '/',
    name: 'Login',
    component: Login

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
