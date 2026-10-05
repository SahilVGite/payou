// Pushes a named event for Google Tag Manager. GA4 is configured inside the
// GTM container, so this file never loads gtag.js. `source` is the same
// page / section / button already attached to the site's CTAs.
export function trackEvent(event, source = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    page: source.page || "",
    section: source.section || "",
    button: source.button || "",
  });
}

export function pageNameFromPath(pathname) {
  if (!pathname || pathname === "/") return "Home";
  if (pathname.startsWith("/contact-us/branch")) return "Contact – Branch";
  if (pathname.startsWith("/contact-us")) return "Contact";
  if (pathname.startsWith("/about-us")) return "About";
  if (pathname.startsWith("/faq")) return "FAQ";
  if (pathname.startsWith("/blog")) return "Blog";
  if (pathname.startsWith("/privacy-policy")) return "Privacy Policy";
  return "Website";
}
