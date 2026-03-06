<template>
  <div>
    <div class="toolbar">
      <h2>召唤兽</h2>
      <el-button type="primary" @click="openAdd">新增</el-button>
    </div>
    <div class="admin-table-wrap">
      <el-table v-loading="loading" :data="list" border stripe>
        <el-table-column prop="code" label="编码" min-width="100" />
        <el-table-column prop="maxHealth" label="最大生命" min-width="120" />
        <el-table-column prop="attack" label="攻击" min-width="90" />
        <el-table-column prop="attackSpeed" label="攻速" min-width="120" />
        <el-table-column prop="speed" label="速度" min-width="90" />
        <el-table-column prop="attackCooldown" label="攻击冷却" min-width="140" />
        <el-table-column prop="range" label="射程" min-width="90" />
        <el-table-column prop="duration" label="持续时长" min-width="110" />
        <el-table-column prop="inheritAttackPercent" label="继承攻击比例" min-width="180" />
        <el-table-column prop="defense" label="防御" min-width="90" />
        <el-table-column label="操作" width="140" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" @click="openEdit(row)">编辑</el-button>
          <el-button link type="danger" @click="handleRemove(row)">删除</el-button>
        </template>
      </el-table-column>
      </el-table>
    </div>

    <el-dialog v-model="dialogVisible" :title="editingId ? '编辑' : '新增'" width="560px" @close="resetForm">
      <el-form :model="form" label-width="160px">
        <el-form-item label="编码" required>
          <el-input v-model="form.code" :disabled="!!editingId" placeholder="如 fire_wolf、global" />
        </el-form-item>
        <el-form-item label="最大生命">
          <el-input-number v-model="form.maxHealth" :min="0" />
        </el-form-item>
        <el-form-item label="攻击">
          <el-input-number v-model="form.attack" :min="0" />
        </el-form-item>
        <el-form-item label="攻速">
          <el-input-number v-model="form.attackSpeed" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="速度">
          <el-input-number v-model="form.speed" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="攻击冷却">
          <el-input-number v-model="form.attackCooldown" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="射程">
          <el-input-number v-model="form.range" :min="0" />
        </el-form-item>
        <el-form-item label="持续时长">
          <el-input-number v-model="form.duration" :min="0" />
        </el-form-item>
        <el-form-item label="继承攻击比例">
          <el-input-number v-model="form.inheritAttackPercent" :min="0" :max="1" :step="0.1" />
        </el-form-item>
        <el-form-item label="防御">
          <el-input-number v-model="form.defense" :min="0" />
        </el-form-item>
        <el-form-item label="毒伤害">
          <el-input-number v-model="form.poisonDamage" :min="0" />
        </el-form-item>
        <el-form-item label="仇恨加成">
          <el-input-number v-model="form.aggroBonus" :min="0" />
        </el-form-item>
        <el-form-item label="全局最大召唤数">
          <el-input-number v-model="form.maxSummons" :min="0" />
        </el-form-item>
        <el-form-item label="精灵图">
          <div class="upload-row">
            <el-input v-model="form.spritePath" placeholder="URL 或相对路径" />
            <el-upload class="upload-btn" :action="'#'" :show-file-list="false" accept="image/*" :http-request="(o) => handleSpriteUpload(o)">
              <el-button type="primary" :loading="uploadingSprite">上传图片</el-button>
            </el-upload>
          </div>
          <div v-if="form.spritePath" class="image-preview"><img :src="form.spritePath" alt="preview" /></div>
        </el-form-item>
        <el-form-item label="帧数">
          <el-input-number v-model="form.frameCount" :min="0" />
        </el-form-item>
        <template v-if="form.frameCount > 0">
          <el-form-item v-for="(slot, idx) in summonFrameSlots" :key="idx" :label="`帧图 ${idx + 1}`">
            <div class="upload-row">
              <el-input v-model="form.frameUrls[idx]" placeholder="帧图 URL" />
              <el-upload class="upload-btn" :action="'#'" :show-file-list="false" accept="image/*" :http-request="(o) => handleFrameUpload(o, idx)">
                <el-button type="primary" :loading="uploadingFrame === idx">上传</el-button>
              </el-upload>
            </div>
            <div v-if="form.frameUrls[idx]" class="image-preview"><img :src="form.frameUrls[idx]" alt="frame" /></div>
          </el-form-item>
        </template>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { list as apiList, add as apiAdd, update as apiUpdate, remove as apiRemove, uploadImage } from '../api/admin'

const COLLECTION = 'summons'
const loading = ref(false)
const list = ref([])
const dialogVisible = ref(false)
const editingId = ref(null)
const uploadingSprite = ref(false)
const uploadingFrame = ref(null)
const defaultForm = {
  code: '',
  maxHealth: 120,
  attack: 14,
  attackSpeed: 1.3,
  speed: 1.4,
  attackCooldown: 0.45,
  range: 110,
  duration: 15,
  inheritAttackPercent: 0.2,
  defense: 2,
  poisonDamage: undefined,
  aggroBonus: undefined,
  maxSummons: undefined,
  spritePath: '',
  frameCount: 0,
  frameUrls: [],
}
const form = ref({ ...defaultForm })

const summonFrameSlots = computed(() => {
  const n = Math.max(0, Number(form.value.frameCount) || 0)
  return Array.from({ length: n }, (_, i) => i)
})

watch(() => form.value.frameCount, (n) => {
  const num = Math.max(0, Number(n) || 0)
  const arr = form.value.frameUrls || []
  form.value.frameUrls = Array.from({ length: num }, (_, i) => arr[i] ?? '')
})

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
  const rowData = { ...defaultForm, ...row }
  delete rowData._id
  if (!Array.isArray(rowData.frameUrls)) rowData.frameUrls = []
  const n = Math.max(0, Number(rowData.frameCount) || 0)
  rowData.frameUrls = Array.from({ length: Math.max(n, rowData.frameUrls.length) }, (_, i) => rowData.frameUrls[i] ?? '')
  form.value = rowData
  dialogVisible.value = true
}

function resetForm() {
  form.value = { ...defaultForm, frameUrls: [] }
}

async function handleSpriteUpload(option) {
  const file = option.file
  if (!file) { option.onError && option.onError(new Error('no file')); return }
  try {
    uploadingSprite.value = true
    const { url } = await uploadImage(file, 'summons')
    if (!url) throw new Error('上传成功但未返回 URL')
    form.value.spritePath = url
    ElMessage.success('上传成功')
    option.onSuccess && option.onSuccess({}, file)
  } catch (e) {
    ElMessage.error(e.message || '上传失败')
    option.onError && option.onError(e)
  } finally {
    uploadingSprite.value = false
  }
}

async function handleFrameUpload(option, idx) {
  const file = option.file
  if (!file) { option.onError && option.onError(new Error('no file')); return }
  try {
    uploadingFrame.value = idx
    const { url } = await uploadImage(file, 'summons')
    if (!url) throw new Error('上传成功但未返回 URL')
    if (!form.value.frameUrls) form.value.frameUrls = []
    form.value.frameUrls[idx] = url
    form.value.frameUrls = [...form.value.frameUrls]
    ElMessage.success('上传成功')
    option.onSuccess && option.onSuccess({}, file)
  } catch (e) {
    ElMessage.error(e.message || '上传失败')
    option.onError && option.onError(e)
  } finally {
    uploadingFrame.value = null
  }
}

function omitEmpty(obj) {
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined && v !== '') out[k] = v
  }
  return out
}

function omitEmpty(obj) {
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === '') continue
    if (k === 'frameUrls' && Array.isArray(v)) {
      const filtered = v.filter(Boolean)
      if (filtered.length) out[k] = filtered
      continue
    }
    out[k] = v
  }
  return out
}

function submit() {
  let payload = { ...form.value }
  if (payload.frameCount === 0 || payload.frameCount === undefined) {
    delete payload.frameCount
    delete payload.frameUrls
  } else if (Array.isArray(payload.frameUrls)) {
    payload.frameUrls = payload.frameUrls.filter(Boolean)
  }
  payload = omitEmpty(payload)
  if (!payload.code) {
    ElMessage.warning('请填写编码')
    return
  }
  if (editingId.value) {
    apiUpdate(COLLECTION, editingId.value, payload).then(() => {
      ElMessage.success('已更新')
      dialogVisible.value = false
      load()
    }).catch((e) => ElMessage.error(e.message))
  } else {
    apiAdd(COLLECTION, payload).then(() => {
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
.upload-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.upload-btn {
  flex-shrink: 0;
}
.image-preview img {
  max-width: 120px;
  max-height: 90px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
.image-preview {
  margin-top: 6px;
}
</style>
