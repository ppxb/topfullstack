import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

export const publicRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: async () =>
          import(/* webpackChunkName: "dashboard" */ '../views/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    component: async () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

export const authRoutes: RouteConfig[] = [
  {
    path: '/graphql',
    component: Layout,
    children: [
      {
        path: '/',
        component: async () =>
          import(/* webpackChunkName: "graphql" */ '../views/GraphQL.vue'),
        meta: {
          auth: 'admin'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: publicRoutes
})

export default router
