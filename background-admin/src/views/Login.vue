<template>
  <div class="auth-page">
    <div class="auth-card">
      <h1 class="auth-title">登录</h1>
      <el-form ref="formRef" :model="form" :rules="rules" label-width="0" @submit.prevent="handleSubmit">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名" size="large" clearable />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="密码" size="large" show-password clearable @keyup.enter="handleSubmit" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" :loading="loading" style="width: 100%" @click="handleSubmit">
            登录
          </el-button>
        </el-form-item>
      </el-form>
      <div class="auth-footer">
        还没有账号？
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { authApi } from '../api/admin'

const router = useRouter()
const route = useRoute()
const formRef = ref(null)
const loading = ref(false)
const form = reactive({ username: '', password: '' })
const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

async function handleSubmit() {
  await formRef.value?.validate().catch(() => {})
  loading.value = true
  try {
    const res = await authApi('login', form.username, form.password)
    const token = res?.data?.token
    if (token) {
      localStorage.setItem('admin_token', token)
      const redirect = route.query.redirect || '/'
      router.push(redirect)
    } else {
      ElMessage.error(res?.msg || '登录失败')
    }
  } catch (e) {
    ElMessage.error(e.response?.data?.msg || e.message || '登录失败')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f5;
}
.auth-card {
  width: 360px;
  padding: 32px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.auth-title {
  margin: 0 0 24px;
  font-size: 22px;
  text-align: center;
  color: #303133;
}
.auth-footer {
  text-align: center;
  color: #909399;
  font-size: 14px;
}
.auth-footer a {
  color: #409eff;
  text-decoration: none;
}
.auth-footer a:hover {
  text-decoration: underline;
}
</style>
