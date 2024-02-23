import { createRouter, createWebHistory } from 'vue-router'
import LaunchScreen from '../views/onboarding/LaunchScreen.vue'
import Onboarding1 from '../views/onboarding/OnBoarding1.vue'
import Onboarding2 from '../views/onboarding/OnBoarding2.vue'

const routes = [
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
