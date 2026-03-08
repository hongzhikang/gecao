import axios from 'axios'
import router from '../router'

const TOKEN_KEY = 'admin_token'

const baseURL = import.meta.env.VITE_ADMIN_API_URL || ''
const uploadBaseURL = import.meta.env.VITE_UPLOAD_API_URL || baseURL
const authBaseURL = import.meta.env.VITE_ADMIN_AUTH_URL || ''

const client = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

const uploadClient = axios.create({
  baseURL: uploadBaseURL,
  headers: { 'Content-Type': 'application/json' },
})

const authClient = axios.create({
  baseURL: authBaseURL,
  headers: { 'Content-Type': 'application/json' },
})

function addTokenInterceptor(axiosInstance) {
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) config.headers.Authorization = 'Bearer ' + token
    return config
  })
}

function addUnauthInterceptor(axiosInstance) {
  axiosInstance.interceptors.response.use(
    (res) => {
      if (res.data && res.data.code === 401) {
        localStorage.removeItem(TOKEN_KEY)
        router.push('/login')
        return Promise.reject(Object.assign(new Error('unauthorized'), { response: res }))
      }
      return res
    },
    (err) => {
      const code = err.response?.data?.code
      const status = err.response?.status
      if (code === 401 || status === 401) {
        localStorage.removeItem(TOKEN_KEY)
        router.push('/login')
      }
      return Promise.reject(err)
    }
  )
}

addTokenInterceptor(client)
addTokenInterceptor(uploadClient)
addUnauthInterceptor(client)
addUnauthInterceptor(uploadClient)

export async function authApi(action, username, password) {
  const res = await authClient.post('', { action, username, password })
  if (res.data.code !== 0) {
    throw Object.assign(new Error(res.data.msg || 'auth failed'), { response: res })
  }
  return res.data
}

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

