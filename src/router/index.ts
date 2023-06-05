import { createRouter,createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const ChildRoute: RouteRecordRaw[] = []
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/basemain',
      name: 'basemain',
      component: () => import('@/views/BaseMain.vue'),
    },
  ],
});

export default router
