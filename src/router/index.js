import { createRouter, createWebHistory } from 'vue-router'
import LaunchScreen from '../views/LaunchScreen.vue'
import Onboarding1 from '../views/OnBoarding1.vue'
import Onboarding2 from '../views/OnBoarding2.vue'

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
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: Onboarding2
    }
  ]
})

export default router
