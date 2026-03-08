<template>
  <div>
    <div class="toolbar">
      <h2>关卡</h2>
      <el-button type="primary" @click="openAdd">新增</el-button>
    </div>
    <div class="admin-table-wrap">
      <el-table v-loading="loading" :data="list" border stripe>
        <el-table-column prop="id" label="关卡ID" min-width="130" />
        <el-table-column label="图片" width="80" align="center">
          <template #default="{ row }">
            <img :src="getThumbSrc(row)" @error="onThumbError" class="table-thumb" alt="" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" min-width="160" />
        <el-table-column prop="description" label="描述" min-width="200" show-overflow-tooltip />
        <el-table-column prop="background" label="背景图" min-width="200" show-overflow-tooltip />
        <el-table-column prop="difficultyId" label="难度ID" min-width="130" />
        <el-table-column label="波次" min-width="100">
          <template #default="{ row }">
            {{ Array.isArray(row.waves) ? row.waves.length : 0 }} 波
          </template>
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right">
          <template #default="{ row }">
            <el-button link type="primary" @click="openEdit(row)">编辑</el-button>
            <el-button link type="danger" @click="handleRemove(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog v-model="dialogVisible" :title="editingId ? '编辑' : '新增'" width="640px" @close="resetForm">
      <el-form :model="form" label-width="100px">
        <el-form-item label="关卡ID" required>
          <el-input v-model="form.id" :disabled="!!editingId" placeholder="如 chapter_grass" />
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" type="textarea" :rows="2" />
        </el-form-item>
        <el-form-item label="背景图">
          <div class="upload-row">
            <el-input v-model="form.background" placeholder="背景图 URL 或相对路径" />
            <el-upload
              class="upload-btn"
              :action="'#'"
              :show-file-list="false"
              accept="image/*"
              :http-request="handleBackgroundUpload"
            >
              <el-button type="primary" :loading="uploadingBackground">上传图片</el-button>
            </el-upload>
          </div>
          <div v-if="form.background" class="image-preview">
            <img :src="form.background" alt="background preview" />
          </div>
        </el-form-item>
        <el-form-item label="难度ID">
          <el-input v-model="form.difficultyId" placeholder="如 normal" />
        </el-form-item>
        <el-form-item label="波次(JSON)">
          <el-input v-model="wavesText" type="textarea" :rows="12" placeholder='[{"index":1,"duration":45,"enemies":[{"type":"basicZombie","count":8}]}]' />
          <div class="form-tip">每波包含: index、duration、enemies（type/count），可选 boss: true</div>
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
import { ref, onMounted, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { list as apiList, add as apiAdd, update as apiUpdate, remove as apiRemove, uploadImage } from '../api/admin'
import { DEFAULT_PLACEHOLDER, getTableImageSrc } from '../utils/placeholder.js'

function getThumbSrc(row) {
  return getTableImageSrc(row, { main: 'background' })
}
function onThumbError(e) {
  e.target.src = DEFAULT_PLACEHOLDER
}

const COLLECTION = 'levels'
const loading = ref(false)
const list = ref([])
const dialogVisible = ref(false)
const editingId = ref(null)
const uploadingBackground = ref(false)
const defaultForm = {
  id: '',
  name: '',
  description: '',
  background: '',
  difficultyId: 'normal',
  waves: [],
}
const form = ref({ ...defaultForm })
const wavesText = ref('[]')

watch(
  () => form.value.waves,
  (val) => {
    wavesText.value = JSON.stringify(val, null, 2)
  },
  { immediate: true }
)

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
  form.value = {
    id: row.id,
    name: row.name,
    description: row.description,
    background: row.background,
    difficultyId: row.difficultyId || 'normal',
    waves: Array.isArray(row.waves) ? row.waves : [],
  }
  wavesText.value = JSON.stringify(form.value.waves, null, 2)
  dialogVisible.value = true
}

function resetForm() {
  form.value = { ...defaultForm }
  wavesText.value = '[]'
}

function submit() {
  if (!form.value.id) {
    ElMessage.warning('请填写关卡ID')
    return
  }
  let waves = form.value.waves
  try {
    waves = JSON.parse(wavesText.value)
  } catch (e) {
    ElMessage.warning('waves 必须是合法 JSON 数组')
    return
  }
  const payload = {
    id: form.value.id,
    name: form.value.name,
    description: form.value.description,
    background: form.value.background,
    difficultyId: form.value.difficultyId,
    waves,
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

async function handleBackgroundUpload(option) {
  const file = option.file
  if (!file) {
    option.onError && option.onError(new Error('no file'))
    return
  }
  try {
    uploadingBackground.value = true
    const { url } = await uploadImage(file, 'levels')
    if (!url) {
      throw new Error('上传成功但未返回 URL')
    }
    form.value.background = url
    ElMessage.success('上传成功')
    option.onSuccess && option.onSuccess({}, file)
  } catch (e) {
    ElMessage.error(e.message || '上传失败')
    option.onError && option.onError(e)
  } finally {
    uploadingBackground.value = false
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
.table-thumb {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  vertical-align: middle;
}
.form-tip {
  font-size: 12px;
  color: #909399;
  margin-top: 4px;
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
  max-width: 200px;
  max-height: 120px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
</style>
