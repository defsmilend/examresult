import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cpu',
    name: 'Cpu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cpu.vue')
  },
  {
    path: '/motherboard',
    name: 'Motherboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Motherboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
