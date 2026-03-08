import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout.vue'

const TOKEN_KEY = 'admin_token'

const routes = [
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue'), meta: { title: '登录', public: true } },
  { path: '/register', name: 'Register', component: () => import('../views/Register.vue'), meta: { title: '注册', public: true } },
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
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (to.meta.public) {
    if (token && (to.path === '/login' || to.path === '/register')) {
      next(to.query.redirect || '/')
    } else {
      next()
    }
    return
  }
  if (!token) {
    next({ path: '/login', query: to.path !== '/' ? { redirect: to.fullPath } : {} })
    return
  }
  next()
})

export default router
