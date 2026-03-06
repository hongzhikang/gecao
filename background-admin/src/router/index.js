import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/heroes',
    children: [
      { path: 'heroes', name: 'Heroes', component: () => import('../views/Heroes.vue'), meta: { title: '职业' } },
      { path: 'enemies', name: 'Enemies', component: () => import('../views/Enemies.vue'), meta: { title: '敌人' } },
      { path: 'summons', name: 'Summons', component: () => import('../views/Summons.vue'), meta: { title: '召唤兽' } },
      { path: 'difficulties', name: 'Difficulties', component: () => import('../views/Difficulties.vue'), meta: { title: '难度' } },
      { path: 'rewards', name: 'Rewards', component: () => import('../views/Rewards.vue'), meta: { title: '奖励' } },
      { path: 'levels', name: 'Levels', component: () => import('../views/Levels.vue'), meta: { title: '关卡' } },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
