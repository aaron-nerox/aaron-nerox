import { createRouter, createWebHashHistory } from 'vue-router'
import Splash from '../views/SplashScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Aaron nerox',
    component: Splash
  },
  {
    path: '/Home',
    name: 'Aaron nerox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/Nerostarx',
    name: 'Nerostarx',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "nerostarx" */ '../views/Nerostarx.vue')
  },
  {
    path: '/Kitsune',
    name: 'Kitsune',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "kitsune" */ '../views/Kitsune.vue')
  },
  {
    path: '/TheX',
    name: 'TheX',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "thex" */ '../views/TheX.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
