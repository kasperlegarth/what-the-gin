import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/Guide.vue'

const routes = [
  {
    path: '/',
    name: 'guide',
    component: WelcomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory("/what-the-gin/"),
  routes
})

export default router
