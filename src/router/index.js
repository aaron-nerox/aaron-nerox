import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '../views/misc/Splash.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashScreen
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/product/neowalls/guidelines',
      name: 'neowalls guidelines',
      component: () => import('../views/misc/NeowallsPolicy.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('../views/misc/Skills.vue')
    },
    {
      path: '/linkhub',
      name: 'LinkHub',
      component: () => import('../views/misc/LinkHub.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: () => import('../views/misc/NotFound.vue')
    }, 
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
