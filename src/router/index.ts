import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const childRoute: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/MainHome.vue'),
    meta: {
      title: 'How have you been?',
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/basemain',
      name: 'basemain',
      component: () => import('@/views/BaseMain.vue'),
      children: childRoute,
      redirect: {
        path:'/home'
      }
    },
  ],
});

export default router;
