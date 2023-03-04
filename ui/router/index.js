import { createRouter, createWebHistory } from 'vue-router'
import MyLanding from '../pages/MyLanding.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: MyLanding
    },
  ]
})

export default router
