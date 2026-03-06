<template>
  <div>
    <div class="toolbar">
      <h2>敌人</h2>
      <el-button type="primary" @click="openAdd">新增</el-button>
    </div>
    <div class="admin-table-wrap">
      <el-table v-loading="loading" :data="list" border stripe>
        <el-table-column prop="code" label="编码" min-width="110" />
        <el-table-column prop="maxHealth" label="最大生命" min-width="120" />
        <el-table-column prop="attack" label="攻击" min-width="90" />
        <el-table-column prop="attackCooldown" label="攻击冷却" min-width="140" />
        <el-table-column prop="speed" label="速度" min-width="90" />
        <el-table-column prop="exp" label="经验" min-width="80" />
        <el-table-column prop="spawnWeight" label="刷怪权重" min-width="130" />
        <el-table-column prop="radius" label="半径" min-width="90" />
        <el-table-column prop="spritePath" label="精灵路径" min-width="200" show-overflow-tooltip />
        <el-table-column label="操作" width="140" fixed="right">
          <template #default="{ row }">
            <el-button link type="primary" @click="openEdit(row)">编辑</el-button>
            <el-button link type="danger" @click="handleRemove(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog v-model="dialogVisible" :title="editingId ? '编辑' : '新增'" width="600px" @close="resetForm">
      <el-form :model="form" label-width="140px">
        <el-form-item label="编码" required>
          <el-input v-model="form.code" :disabled="!!editingId" placeholder="如 basicZombie" />
        </el-form-item>
        <el-form-item label="最大生命">
          <el-input-number v-model="form.maxHealth" :min="1" />
        </el-form-item>
        <el-form-item label="攻击">
          <el-input-number v-model="form.attack" :min="0" />
        </el-form-item>
        <el-form-item label="攻击冷却">
          <el-input-number v-model="form.attackCooldown" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="速度">
          <el-input-number v-model="form.speed" :min="0" :step="0.1" />
        </el-form-item>
        <el-form-item label="经验">
          <el-input-number v-model="form.exp" :min="0" />
        </el-form-item>
        <el-form-item label="刷怪权重">
          <el-input-number v-model="form.spawnWeight" :min="0" />
        </el-form-item>
        <el-form-item label="半径">
          <el-input-number v-model="form.radius" :min="0" />
        </el-form-item>
        <el-form-item label="精灵路径">
          <div class="upload-row">
            <el-input v-model="form.spritePath" placeholder="精灵图 URL 或相对路径" />
            <el-upload
              class="upload-btn"
              :action="'#'"
              :show-file-list="false"
              accept="image/*"
              :http-request="handleSpriteUpload"
            >
              <el-button type="primary" :loading="uploadingSprite">上传图片</el-button>
            </el-upload>
          </div>
          <div v-if="form.spritePath" class="image-preview">
            <img :src="form.spritePath" alt="sprite preview" />
          </div>
        </el-form-item>
        <el-form-item label="攻击帧路径前缀">
          <el-input v-model="form.attackFrameBase" />
        </el-form-item>
        <el-form-item label="攻击帧数量">
          <el-input-number v-model="form.attackFrameCount" :min="0" />
        </el-form-item>
        <el-form-item label="帧数">
          <el-input-number v-model="form.frameCount" :min="0" placeholder="可上传的帧图数量" />
        </el-form-item>
        <template v-if="form.frameCount > 0">
          <el-form-item v-for="(slot, idx) in enemyFrameSlots" :key="idx" :label="`帧图 ${idx + 1}`">
            <div class="upload-row">
              <el-input v-model="form.frameUrls[idx]" placeholder="帧图 URL" />
              <el-upload class="upload-btn" :action="'#'" :show-file-list="false" accept="image/*" :http-request="(o) => handleFrameUpload(o, idx)">
                <el-button type="primary" :loading="uploadingFrame === idx">上传</el-button>
              </el-upload>
            </div>
            <div v-if="form.frameUrls[idx]" class="image-preview"><img :src="form.frameUrls[idx]" alt="frame" /></div>
          </el-form-item>
        </template>
        <el-form-item label="命中减速">
          <el-switch v-model="form.slowOnHit" />
        </el-form-item>
        <template v-if="form.slowOnHit">
          <el-form-item label="减速时长">
            <el-input-number v-model="form.slowDuration" :min="0" :step="0.1" />
          </el-form-item>
          <el-form-item label="减速比例">
            <el-input-number v-model="form.slowFactor" :min="0" :max="1" :step="0.1" />
          </el-form-item>
        </template>
        <el-form-item label="护盾值">
          <el-input-number v-model="form.shieldAmount" :min="0" />
        </el-form-item>
        <el-form-item label="是否首领">
          <el-switch v-model="form.isBoss" />
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
import { ref, onMounted, watch, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { list as apiList, add as apiAdd, update as apiUpdate, remove as apiRemove, uploadImage } from '../api/admin'

const COLLECTION = 'enemies'
const loading = ref(false)
const list = ref([])
const dialogVisible = ref(false)
const editingId = ref(null)
const uploadingSprite = ref(false)
const uploadingFrame = ref(null)
const defaultForm = {
  code: '',
  maxHealth: 32,
  attack: 7,
  attackCooldown: 0.6,
  speed: 0.8,
  exp: 5,
  spawnWeight: 10,
  radius: 20,
  spritePath: '/assets/enemies/zombie.png',
  attackFrameBase: '/assets/enemies/zombie_attack_frame',
  attackFrameCount: 4,
  frameCount: 0,
  frameUrls: [],
  slowOnHit: false,
  slowDuration: 1.5,
  slowFactor: 0.5,
  shieldAmount: undefined,
  isBoss: false,
}
const form = ref({ ...defaultForm })

const enemyFrameSlots = computed(() => {
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

async function handleFrameUpload(option, idx) {
  const file = option.file
  if (!file) { option.onError && option.onError(new Error('no file')); return }
  try {
    uploadingFrame.value = idx
    const { url } = await uploadImage(file, 'enemies')
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
  const payload = omitEmpty(form.value)
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

async function handleSpriteUpload(option) {
  const file = option.file
  if (!file) {
    option.onError && option.onError(new Error('no file'))
    return
  }
  try {
    uploadingSprite.value = true
    const { url } = await uploadImage(file, 'enemies')
    if (!url) {
      throw new Error('上传成功但未返回 URL')
    }
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
.image-preview {
  margin-top: 8px;
}
.image-preview img {
  max-width: 160px;
  max-height: 120px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
</style>
