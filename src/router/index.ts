import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/cardPage/:id',
      name: 'cardPage',
      component: () => import('../views/CardPage.vue')
    }
  ]
})

export default router
