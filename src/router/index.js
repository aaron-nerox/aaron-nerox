import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '../views/SplashScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: SplashScreen
  },
  {
    path: '/Home',
    name: 'Aaron',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/Home/skills',
    name: 'Skills',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue')
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
  history: createWebHistory(),
  routes
})

export default router
