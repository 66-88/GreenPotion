import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/wplans',
    name: 'writePlans',
    component: () => import( '../views/writePlans.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
