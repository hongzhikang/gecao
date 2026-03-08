<template>
  <div>
    <div class="toolbar">
      <h2>奖励</h2>
      <el-button type="primary" @click="openAdd">新增</el-button>
    </div>
    <div class="admin-table-wrap">
      <el-table v-loading="loading" :data="list" border stripe>
        <el-table-column prop="code" label="编码" min-width="120" />
        <el-table-column label="图片" width="80" align="center">
          <template #default="{ row }">
            <img :src="getThumbSrc(row)" @error="onThumbError" class="table-thumb" alt="" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" min-width="100" />
        <el-table-column prop="description" label="描述" min-width="200" show-overflow-tooltip />
        <el-table-column prop="type" label="类型" min-width="120" />
        <el-table-column prop="target" label="目标" min-width="130" />
        <el-table-column prop="value" label="数值" min-width="100" />
        <el-table-column label="操作" width="140" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" @click="openEdit(row)">编辑</el-button>
          <el-button link type="danger" @click="handleRemove(row)">删除</el-button>
        </template>
      </el-table-column>
      </el-table>
    </div>

    <el-dialog v-model="dialogVisible" :title="editingId ? '编辑' : '新增'" width="500px" @close="resetForm">
      <el-form :model="form" label-width="100px">
        <el-form-item label="编码" required>
          <el-input v-model="form.code" :disabled="!!editingId" placeholder="如 attackBoost" />
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" type="textarea" :rows="2" />
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="form.type" placeholder="如 multiplier、flat、healPercent、screenBurst 等" />
        </el-form-item>
        <el-form-item label="目标">
          <el-input v-model="form.target" />
        </el-form-item>
        <el-form-item label="数值">
          <el-input-number v-model="form.value" :step="0.01" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { list as apiList, add as apiAdd, update as apiUpdate, remove as apiRemove } from '../api/admin'
import { DEFAULT_PLACEHOLDER } from '../utils/placeholder.js'

function getThumbSrc() {
  return DEFAULT_PLACEHOLDER
}
function onThumbError(e) {
  e.target.src = DEFAULT_PLACEHOLDER
}

const COLLECTION = 'rewards'
const loading = ref(false)
const list = ref([])
const dialogVisible = ref(false)
const editingId = ref(null)
const defaultForm = {
  code: '',
  name: '',
  description: '',
  type: 'multiplier',
  target: '',
  value: 0.1,
}
const form = ref({ ...defaultForm })

function load() {
  loading.value = true
  apiList(COLLECTION).then((res) => {
    list.value = res.data || []
  }).catch((e) => {
    ElMessage.error(e.message || '加载失败')
  }).finally(() => {
    loading.value = false
  })
}

function openAdd() {
  editingId.value = null
  resetForm()
  dialogVisible.value = true
}

function openEdit(row) {
  editingId.value = row._id
  form.value = { ...defaultForm, ...row }
  delete form.value._id
  dialogVisible.value = true
}

function resetForm() {
  form.value = { ...defaultForm }
}

function submit() {
  if (!form.value.code) {
    ElMessage.warning('请填写编码')
    return
  }
  if (editingId.value) {
    apiUpdate(COLLECTION, editingId.value, form.value).then(() => {
      ElMessage.success('已更新')
      dialogVisible.value = false
      load()
    }).catch((e) => ElMessage.error(e.message))
  } else {
    apiAdd(COLLECTION, form.value).then(() => {
      ElMessage.success('已添加')
      dialogVisible.value = false
      load()
    }).catch((e) => ElMessage.error(e.message))
  }
}

function handleRemove(row) {
  ElMessageBox.confirm('确定删除该条记录？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => apiRemove(COLLECTION, row._id))
    .then(() => {
      ElMessage.success('已删除')
      load()
    })
    .catch((e) => {
      if (e !== 'cancel') ElMessage.error(e.message || '删除失败')
    })
}

onMounted(load)
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.toolbar h2 {
  margin: 0;
  font-size: 18px;
}
.table-thumb {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  vertical-align: middle;
}
</style>
