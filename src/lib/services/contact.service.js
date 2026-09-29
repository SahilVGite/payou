import { api } from '../axios'
import { ENDPOINTS } from '../endpoints'
import { unwrapApiData } from './common'

/**
 * Submit a contact or branch enquiry.
 * Branch fields stay empty for the main Contact Us form.
 */
export async function submitContact(payload) {
  const res = await api.post(ENDPOINTS.contactSubmit, payload)
  return {
    ...res.data,
    data: unwrapApiData(res.data),
  }
}
