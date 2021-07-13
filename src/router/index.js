import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favorites from '../views/Favorites.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Favorites',
    name: 'Favorites',
    component: Favorites

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
