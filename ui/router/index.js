import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue';
import LandingPage from '../pages/LandingPage.vue'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      beforeEnter: authGuard
    }
  ]
})

export default router
