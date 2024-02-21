import { createRouter, createWebHistory } from 'vue-router'
import LaunchScreen from '../views/LaunchScreen.vue'
import Onboarding1 from '../views/OnBoarding1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'launchScreen',
      component: LaunchScreen
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Onboarding1
    }
  ]
})

export default router
