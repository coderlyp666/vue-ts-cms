import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/Main.vue'),
      children: [
        {
          path: '/main',
          redirect: '/main/analysis/overview'
        },
        {
          path: '/main/analysis/overview',
          component: () =>
            import('../views/main/analysis/overview/overview.vue')
        },
        {
          path: '/main/analysis/dashboard',
          component: () =>
            import('../views/main/analysis/dashboard/dashboard.vue')
        }
      ]
    }
  ]
})

// 导航守卫
router.beforeEach((to) => {
  const token = localCache.getStorage('token')
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
})
export default router
