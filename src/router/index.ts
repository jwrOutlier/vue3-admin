import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const adminChildRoute: RouteRecordRaw[] = [
  {
    path: '/workbench',
    name: 'workbench',
    component: () => import('@/views/admin/workbench/WorkBench.vue'),
  },
  {
    path: '/customCom',
    name: 'customCom',
    component: () => import('@/views/admin/customCom/custom-com.vue'),
  },
  {
    path: '/richText',
    name: 'richText',
    component: () => import('@/views/admin/richText/RichText.vue'),
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
        path: '/workbench',
      },
      children: adminChildRoute,
    },
  ],
})

export default router
