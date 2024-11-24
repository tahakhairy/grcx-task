import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: () => import('@/views/Login.vue') },
    {
      path: '/app',
      name: 'home',
      beforeEnter: (to, from, next) => {
        const userId = document.cookie
          .split('; ')
          .find((row) => row.startsWith('user_id='))
          ?.split('=')[1]

        if (!userId || userId === 'Guest') next({ name: 'login' })
        else next()
      },
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router
