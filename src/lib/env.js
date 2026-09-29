/**
 * Public environment variables for the Pay You frontend.
 * NEXT_PUBLIC_API_BASE_URL is the API origin (no /api suffix).
 * When it is unset, the Axios client falls back to API_PROXY_TARGET on the server
 * and to a same-origin /api path in the browser.
 */

export function getApiBaseUrl() {
  const base =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.VITE_API_BASE_URL ||
    ''
  return base.replace(/\/$/, '')
}

/** Optional separate image host; falls back to the API origin. */
export function getApiImageBaseUrl() {
  const base =
    process.env.NEXT_PUBLIC_API_IMAGE_URL ||
    process.env.VITE_API_IMAGE_URL ||
    getApiBaseUrl()
  return base.replace(/\/$/, '')
}
