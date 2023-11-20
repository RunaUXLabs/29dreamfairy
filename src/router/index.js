// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/29dreamfairy',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/29dreamfairy/mbti',
    name: 'Test',
    component: () => import('@/views/Test.vue'),
  },
  {
    path: '/29dreamfairy/result',
    name: 'Result',
    component: () => import('@/views/Result.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
