import axios from 'axios'
import { getApiBaseUrl } from './env'

function resolveApiBaseUrl() {
  const publicBase = getApiBaseUrl()
  if (publicBase) return publicBase
  if (typeof window === 'undefined') {
    return (process.env.API_PROXY_TARGET || 'http://localhost:8038').replace(/\/$/, '')
  }
  return ''
}

const base = resolveApiBaseUrl()

export const api = axios.create({
  baseURL: base ? `${base}/api` : '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const data = error?.response?.data
    const message =
      (Array.isArray(data?.errors) ? data.errors.join(' · ') : null) ||
      data?.message ||
      error?.message ||
      'Request failed'

    const err = new Error(message)
    err.status = error?.response?.status
    err.data = data
    err.fields = data?.fields || {}
    return Promise.reject(err)
  },
)
