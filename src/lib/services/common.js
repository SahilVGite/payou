export function unwrapApiData(payload) {
  if (
    payload &&
    Object.prototype.hasOwnProperty.call(payload, 'data') &&
    (payload.status === true || payload.success === true)
  ) {
    return payload.data
  }
  return payload
}
