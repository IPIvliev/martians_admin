import { createRouter, createWebHistory } from 'vue-router'
import Panel from '../views/panel.vue'

const routes = [
  {
    path: '/',
    name: 'Panel',
    component: Panel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
