import { api } from '../axios'
import { ENDPOINTS } from '../endpoints'
import { unwrapApiData } from './common'

export async function submitCallback(payload) {
  const res = await api.post(ENDPOINTS.callbackSubmit, payload)
  return {
    ...res.data,
    data: unwrapApiData(res.data),
  }
}
