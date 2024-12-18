import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProgrammesView from '@/views/ProgrammesView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import MouvementsView from '@/views/MouvementsView.vue'
import LoginView from '@/views/LoginView.vue'
import ArgentPage from '@/views/ArgentPage.vue'
import OrPage from '@/views/OrPage.vue'
import PlatinePage from '@/views/PlatinePage.vue'
import DiamantPage from '@/views/DiamantPage.vue'
import BronzePage from '@/views/BronzePage.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/programmes',
      name: 'programmes',
      component: ProgrammesView,
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
    },
    {
      path: '/mouvements',
      name: 'mouvements',
      component: MouvementsView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/programmes/Bronze',
      name: 'bronze',
      component: BronzePage,
    },
    {
      path: '/programmes/Argent',
      name: 'argent',
      component: ArgentPage,
    },
    {
      path: '/programmes/Or',
      name: 'or',
      component: OrPage,
    },
    {
      path: '/programmes/Platine',
      name: 'platine',
      component: PlatinePage,
    },
    {
      path: '/programmes/Diamant',
      name: 'diamant',
      component: DiamantPage,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: PageNotFoundView,
    },
  ],
})

export default router
