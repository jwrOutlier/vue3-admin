import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const adminChildRoute: RouteRecordRaw[] = [
  {
    path: '/earth',
    name: 'earth',
    component: () => import('@/views/admin/EarthCom.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/Admin.vue'),
      redirect: {
        path: '/earth',
      },
      children: adminChildRoute,
    },
  ],
})

export default router
