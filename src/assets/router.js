import { createWebHistory, createRouter } from 'vue-router'

import MainView from '../views/main.vue'

const routes = [
  { path: '/', component: MainView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router