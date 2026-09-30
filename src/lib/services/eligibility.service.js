import { api } from '../axios'
import { ENDPOINTS } from '../endpoints'
import { unwrapApiData } from './common'

export async function submitEligibility(payload) {
  const res = await api.post(ENDPOINTS.eligibilitySubmit, payload)
  return {
    ...res.data,
    data: unwrapApiData(res.data),
  }
}
