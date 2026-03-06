<template>
  <div>
    <div class="toolbar">
      <h2>难度</h2>
      <el-button type="primary" @click="openAdd">新增</el-button>
    </div>
    <div class="admin-table-wrap">
      <el-table v-loading="loading" :data="list" border stripe>
        <el-table-column prop="code" label="编码" min-width="90" />
        <el-table-column prop="name" label="名称" min-width="90" />
        <el-table-column prop="enemyHpMultiplier" label="敌人生命倍率" min-width="180" />
        <el-table-column prop="enemyDamageMultiplier" label="敌人伤害倍率" min-width="200" />
        <el-table-column prop="spawnMultiplier" label="刷怪倍率" min-width="130" />
        <el-table-column prop="enemyCountMultiplier" label="敌人数量倍率" min-width="180" />
        <el-table-column prop="expGainMultiplier" label="经验获得倍率" min-width="170" />
        <el-table-column prop="dropRateMultiplier" label="掉落率倍率" min-width="160" />
        <el-table-column prop="eliteWeightBonus" label="精英权重加成" min-width="160" />
        <el-table-column label="操作" width="140" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" @click="openEdit(row)">编辑</el-button>
          <el-button link type="danger" @click="handleRemove(row)">删除</el-button>
        </template>
      </el-table-column>
      </el-table>
    </div>

    <el-dialog v-model="dialogVisible" :title="editingId ? '编辑' : '新增'" width="500px" @close="resetForm">
      <el-form :model="form" label-width="180px">
        <el-form-item label="编码" required>
          <el-input v-model="form.code" :disabled="!!editingId" placeholder="如 easy, normal, hard" />
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="敌人生命倍率">
          <el-input-number v-model="form.enemyHpMultiplier" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="敌人伤害倍率">
          <el-input-number v-model="form.enemyDamageMultiplier" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="刷怪倍率">
          <el-input-number v-model="form.spawnMultiplier" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="敌人数量倍率">
          <el-input-number v-model="form.enemyCountMultiplier" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="经验获得倍率">
          <el-input-number v-model="form.expGainMultiplier" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="掉落率倍率">
          <el-input-number v-model="form.dropRateMultiplier" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="精英权重加成">
          <el-input-number v-model="form.eliteWeightBonus" :min="0" :step="0.1" />
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

const COLLECTION = 'difficulties'
const loading = ref(false)
const list = ref([])
const dialogVisible = ref(false)
const editingId = ref(null)
const defaultForm = {
  code: '',
  name: '普通',
  enemyHpMultiplier: 1,
  enemyDamageMultiplier: 1,
  spawnMultiplier: 1,
  enemyCountMultiplier: 1,
  expGainMultiplier: 1,
  dropRateMultiplier: 1,
  eliteWeightBonus: 0,
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
</style>
