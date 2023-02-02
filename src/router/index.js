import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/middlewares/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { auth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),

    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue'),

    }
  ]
})
router.beforeEach(auth)
export default router
