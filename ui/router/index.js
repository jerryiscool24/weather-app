import { createRouter, createWebHistory } from 'vue-router'
import { authGuard, useAuth0 } from '@auth0/auth0-vue';
import LandingPage from '../pages/LandingPage.vue'
import HomePage from '../pages/HomePage.vue'
import WeatherPage from '../pages/WeatherPage.vue'

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
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherPage,
      props: route => ({query: route.query.q}),
      beforeEnter: authGuard
    }
  ]
})

export default router
