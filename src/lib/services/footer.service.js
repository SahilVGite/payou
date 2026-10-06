import { getApiBaseUrl } from '../env'

export const FOOTER_SLUG = 'your-loan-journey-made-simple'

/** Current footer copy, used when the public API cannot be read. */
export const FALLBACK_FOOTER = {
  blurb:
    'Leading loan advisory in Pune, connecting you with trusted banking and financial partners for personal, business, home, and property loans.',
  linksTitle: 'USEFUL LINKS',
  links: [
    { label: 'Home', href: '/', external: false },
    { label: 'Contact', href: '/contact-us', external: false },
  ],
  contactTitle: 'GET IN TOUCH',
  features: [
    {
      kind: 'address',
      text: 'Office No. 3, 4, 5, 6, Vishal Arcade, Opp. to Sonigara Jewellers, Pimple Chinchwad (Municipal Corporation), Haveli, Pune - 411019',
    },
    {
      kind: 'phone',
      text: '020 2735 0055 | +91 91755 35555',
      parts: ['020 2735 0055', '+91 91755 35555'],
    },
    { kind: 'email', text: 'info@payyouadvisory.com' },
    { kind: 'hours', text: 'Mon - Sat: 9:30 AM - 6:30 PM' },
  ],
  social: [
    { label: 'Facebook', href: '#', external: false },
    { label: 'LinkedIn', href: '#', external: false },
    { label: 'Instagram', href: '#', external: false },
    { label: 'YouTube', href: '#', external: false },
    { label: 'Website', href: '#', external: false },
  ],
  copyright: '© 2026 Payyou Advisory Private Ltd. All rights reserved.',
  legalLinks: [{ label: 'Privacy Policy & Terms Conditions', href: '/privacy-policy', external: false }],
}

function apiOrigin() {
  const configured =
    getApiBaseUrl() || String(process.env.API_PROXY_TARGET || '').replace(/\/$/, '')
  return configured || 'https://payyouadvisory.com/payouapi'
}

function plainText(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

function sorted(list) {
  return [...(list || [])].sort((a, b) => (Number(a?.sortOrder) || 0) - (Number(b?.sortOrder) || 0))
}

function normalizeHref(url, linkType) {
  const raw = String(url || '').trim()
  if (!raw) return { href: '#', external: false }
  const markedExternal = String(linkType || '').toLowerCase() === 'external' || /^https?:\/\//i.test(raw)
  if (!markedExternal) {
    return { href: raw.startsWith('/') ? raw : `/${raw}`, external: false }
  }
  try {
    const parsed = new URL(raw)
    const host = parsed.hostname.replace(/^www\./, '')
    if (host === 'payyouadvisory.com') {
      return { href: `${parsed.pathname}${parsed.search}${parsed.hash}` || '/', external: false }
    }
  } catch {
    return { href: raw, external: true }
  }
  return { href: raw, external: true }
}

function mapButtons(buttons) {
  return sorted(buttons)
    .map((button) => {
      const label = String(button?.label || '').trim()
      if (!label) return null
      return { label, ...normalizeHref(button.url, button.linkType) }
    })
    .filter(Boolean)
}

function featureKind(feature) {
  const name = String(feature?.iconName || '').toLowerCase()
  const text = String(feature?.text || '')
  if (name.includes('phone') || (text.includes('|') && /\d/.test(text))) return 'phone'
  if (name.includes('mail') || name.includes('email') || text.includes('@')) return 'email'
  if (name.includes('clock') || name.includes('time')) return 'hours'
  if (name.includes('location') || name.includes('pin') || name.includes('map')) return 'address'
  return 'text'
}

function mapFeatures(features) {
  return sorted(features)
    .map((feature) => {
      const text = plainText(feature?.text)
      if (!text) return null
      const kind = featureKind(feature)
      if (kind === 'phone') {
        const parts = text.split('|').map((part) => part.trim()).filter(Boolean)
        return { kind, text, parts: parts.length ? parts : [text] }
      }
      return { kind, text }
    })
    .filter(Boolean)
}

function findSection(sections, pattern) {
  return sections.find((section) => pattern.test(String(section?.additionalTitle || '').trim()))
}

function mapModule(module) {
  const sections = sorted(module?.additionalSections).filter((section) => section?.status !== false)
  const company =
    findSection(sections, /payyou advisory/i) ||
    sections.find((section) => plainText(section.additionalDetail))
  const links = findSection(sections, /useful links/i) || sections[1]
  const contact = findSection(sections, /get in touch/i) || sections[2]
  const legal =
    findSection(sections, /rights reserved|©/i) ||
    sections[sections.length - 1]

  const blurb = plainText(company?.additionalDetail)
  const linkItems = mapButtons(links?.buttons)
  const contactFeatures = mapFeatures(contact?.features)
  const social = mapButtons(contact?.buttons)
  const legalLinks = mapButtons(legal?.buttons)
  const copyright = plainText(legal?.additionalTitle)

  return {
    blurb: blurb || FALLBACK_FOOTER.blurb,
    linksTitle: plainText(links?.additionalTitle).toUpperCase() || FALLBACK_FOOTER.linksTitle,
    links: linkItems.length ? linkItems : FALLBACK_FOOTER.links,
    contactTitle: plainText(contact?.additionalTitle).toUpperCase() || FALLBACK_FOOTER.contactTitle,
    features: contactFeatures.length ? contactFeatures : FALLBACK_FOOTER.features,
    social: social.length ? social : FALLBACK_FOOTER.social,
    copyright: copyright || FALLBACK_FOOTER.copyright,
    legalLinks: legalLinks.length ? legalLinks : FALLBACK_FOOTER.legalLinks,
  }
}

export async function getFooterContent() {
  try {
    const response = await fetch(`${apiOrigin()}/api/front/contact`, {
      cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    })
    if (!response.ok) return FALLBACK_FOOTER
    const payload = await response.json()
    const modules = payload?.data?.footerCommonModules || []
    const module =
      modules.find((item) => item?.slug === FOOTER_SLUG) ||
      modules.find((item) => String(item?.pageName || '').toLowerCase() === 'footer') ||
      null
    if (!module) return FALLBACK_FOOTER
    return mapModule(module)
  } catch {
    return FALLBACK_FOOTER
  }
}
