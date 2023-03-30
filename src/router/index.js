import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/Guide.vue'

const routes = [
  {
    path: '/',
    name: 'guide',
    component: WelcomeView,
    meta: { transition: 'fade'}
  },
  {
    path: '/ice',
    name: 'ice',
    component: () => import('../views/Step1.vue'),
    meta: { transition: 'fade'}
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
