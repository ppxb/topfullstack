import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Components from '../views/Components.vue'
import Login from '../views/Login.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/comp',
    name: 'Components',
    component: Components
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
