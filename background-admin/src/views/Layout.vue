<template>
  <el-container class="layout">
    <el-aside width="200px" class="aside">
      <div class="title">游戏数据管理</div>
      <el-menu
        :default-active="$route.path"
        router
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409eff"
      >
        <el-menu-item index="/heroes">职业</el-menu-item>
        <el-menu-item index="/enemies">敌人</el-menu-item>
        <el-menu-item index="/summons">召唤兽</el-menu-item>
        <el-menu-item index="/difficulties">难度</el-menu-item>
        <el-menu-item index="/rewards">奖励</el-menu-item>
        <el-menu-item index="/levels">关卡</el-menu-item>
      </el-menu>
      <div class="logout-wrap">
        <el-button type="danger" plain size="small" @click="handleLogout">退出</el-button>
      </div>
    </el-aside>
    <el-main class="main">
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const TOKEN_KEY = 'admin_token'

function handleLogout() {
  localStorage.removeItem(TOKEN_KEY)
  router.push('/login')
}
</script>

<style scoped>
.layout {
  height: 100vh;
}
.aside {
  background-color: #304156;
}
.title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 20px;
  text-align: center;
}
.logout-wrap {
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.logout-wrap .el-button {
  width: 100%;
}
.main {
  background-color: #f0f2f5;
  padding: 20px;
  overflow: auto;
}

/* 表格宽度自适应（子页面中的 .admin-table-wrap） */
.main :deep(.admin-table-wrap) {
  width: 100%;
  overflow-x: auto;
}
.main :deep(.admin-table-wrap .el-table) {
  width: 100%;
  min-width: 600px;
}
</style>
