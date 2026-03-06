import axios from 'axios'

const baseURL = import.meta.env.VITE_ADMIN_API_URL || ''
const uploadBaseURL = import.meta.env.VITE_UPLOAD_API_URL || baseURL

const client = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

const uploadClient = axios.create({
  baseURL: uploadBaseURL,
  headers: { 'Content-Type': 'application/json' },
})

export async function adminApi(collection, action, id = null, data = null) {
  const body = { collection, action }
  if (id != null) body.id = id
  if (data != null) body.data = data
  const res = await client.post('', body)
  if (res.data.code !== 0) {
    throw new Error(res.data.msg || 'request failed')
  }
  return res.data
}

export function list(collection) {
  return adminApi(collection, 'list')
}

export function add(collection, data) {
  return adminApi(collection, 'add', null, data)
}

export function update(collection, id, data) {
  return adminApi(collection, 'update', id, data)
}

export function remove(collection, id) {
  return adminApi(collection, 'remove', id)
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = (e) => reject(e)
    reader.readAsDataURL(file)
  })
}

export async function uploadImage(file, folder) {
  if (!file) throw new Error('no file')
  const dataUrl = await fileToBase64(file)
  const body = {
    file: dataUrl,
    filename: file.name || 'image.png',
    folder: folder || '',
  }
  const res = await uploadClient.post('', body)
  if (res.data.code !== 0) {
    throw new Error(res.data.msg || 'upload failed')
  }
  const payload = res.data.data || {}
  return {
    url: payload.url || payload.fileID || payload.fileId || payload.file_id,
    fileID: payload.fileID || payload.fileId || payload.file_id,
    cloudPath: payload.cloudPath,
  }
}

